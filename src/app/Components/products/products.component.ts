import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observer, take } from 'rxjs';
import { HomeItemDto } from 'src/app/Dtos/HomeItemDto';
import { PageDto } from 'src/app/Dtos/PageDto';
import { ProductsService } from 'src/app/Services/Products/products.service';
import { FilterService } from 'src/app/Services/Filter/filter.service';
import { OrderByStrings } from 'src/app/Dtos/OrderByStrings';
import { data } from 'jquery';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private readonly ProductsService: ProductsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly filterService: FilterService
  ) {}

  protected readonly Math = Math;
  orderByString = OrderByStrings;
  Products?: HomeItemDto[];
  orderBy: string = '';
  categoryIds: string[] = [];
  subCategoryIds: string[] = [];
  brandIds:string[] = [];//--------------------------
  searchText: string = '';

  pagination = 1;
  limit = 12;
  TotalProducts: any;

  ngOnInit(): void {
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      this.pagination = params['page'] ?? 1;
      this.searchText = params['searchText'] ?? '';

      // Get orderBy and categoryId parameters from query params
      this.orderBy = params['orderBy'] || '';
      // Update categoryIds with array of selected category IDs
      this.categoryIds = params['categoryId']
        ? Array.isArray(params['categoryId'])
          ? params['categoryId']
          : [params['categoryId']]
        : [];

      this.subCategoryIds = params['subCategoryId']
        ? Array.isArray(params['subCategoryId'])
          ? params['subCategoryId']
          : [params['subCategoryId']]
        : [];

      this.brandIds=params['brandId']? Array.isArray(params['brandId'])?params['brandId']:[params['brandId']]:[];

      this.filterService.updateSelectedCategories(this.categoryIds);
      this.filterService.updateSelectedSubcategories(this.subCategoryIds);
      this.filterService.updateSelectedBrands(this.brandIds);

      this.fetchProducts();
    });

    this.filterService.updateSearchQuery.subscribe({
      next: (data: string) => {
        this.pagination = 1;
        this.onSearchQuery(data);
      },
    });

    this.filterService.updateCategoriesSelected.subscribe({
      next: (data: string[]) => {
        this.onSelectCategories(data);
      },
    });

    this.filterService.updateSubCategoriesSelected.subscribe({
      next: (data: string[]) => {
        this.onSelectSubCategories(data);
      },
    });

    this.filterService.updateBrandsSelected.subscribe({
      next:(data:string[])=>{
        this.onSelectBrands(data);
      }
    })
  }

  fetchProducts(): void {
    this.fetchItems();
    //#region  To Be Deleted
    // if (this.searchText && this.searchText !== '') {
    //   this.fetchAllProductsBySearch();
    // } else if (this.subCategoryIds && this.subCategoryIds.length > 0) {
    //   this.fetchItemsBySubCategories();
    // } else if (this.categoryIds && this.categoryIds.length > 0) {
    //   this.fetchItemsByCategories();
    // } else {
    //   this.fetchAllProductsWithoutFilter();
    // }
    //#endregion
  }

  successObjCall: Partial<Observer<PageDto<HomeItemDto>>> = {
    next: (data) => {
      this.Products = data.data;
      this.TotalProducts = data.count;
      if (this.TotalProducts <= this.limit) this.pagination = 1;
    },
    error: (err) => console.log(err),
  };

  fetchItems(): void {
    // Call HomeItemService method to fetch products based on orderBy parameter
    this.ProductsService.GetItems(
      this.categoryIds,
      this.subCategoryIds,
      this.brandIds,
      this.searchText,
      this.pagination,
      this.orderBy
    ).subscribe(this.successObjCall);
  }

  //#region  To Be Deleted
  fetchAllProductsBySearch(): void {
    // Call HomeItemService method to fetch products based on orderBy parameter
    this.ProductsService.GetItemsBySearch(
      this.searchText,
      this.pagination,
      this.orderBy
    ).subscribe(this.successObjCall);
  }

  fetchAllProductsWithoutFilter(): void {
    // Call HomeItemService method to fetch products based on orderBy parameter
    this.ProductsService.GetAllItems(this.pagination, this.orderBy).subscribe(
      this.successObjCall
    );
  }

  fetchItemsByCategories(): void {
    if (this.categoryIds && this.categoryIds.length > 0) {
      // If categoryId is present, call getItemsByCategory method
      this.ProductsService.GetItemsByCategories(
        this.categoryIds,
        this.pagination,
        this.orderBy
      ).subscribe(this.successObjCall);
    } else {
      this.fetchProducts();
    }
  }

  fetchItemsByBrands():void{
    if (this.brandIds && this.brandIds.length > 0) {
     
      this.ProductsService.GetItemsByCategories(
        this.brandIds,
        this.pagination,
        this.orderBy
      ).subscribe(this.successObjCall);
    } else {
      this.fetchProducts();
    }
  }

  fetchItemsBySubCategories(): void {
    if (this.subCategoryIds && this.subCategoryIds.length > 0) {
      // If categoryId is present, call getItemsByCategory method
      this.ProductsService.GetItemsBySubCategories(
        this.subCategoryIds,
        this.pagination,
        this.orderBy
      ).subscribe(this.successObjCall);
    } else {
      this.fetchProducts();
    }
  }

  //#endregion

  onSelectCategories(selectedCategoryIds: string[]) {
    // Update categoryId with the selected category IDs
    this.categoryIds = selectedCategoryIds;
    this.pagination = 1;
    this.searchText = '';

    // Update query params with categoryId parameter
    this.router.navigate([], {
      queryParams: { searchText: null, categoryId: this.categoryIds, page: 1 },
      queryParamsHandling: 'merge',
    });
    this.fetchProducts();
  }

  onSelectBrands(selectedBrandIds:string[]){
    this.brandIds=selectedBrandIds;
    this.pagination = 1;
    this.searchText = '';
    this.router.navigate([],{
      queryParams: { searchText: null, brandId: this.brandIds, page: 1 },
      queryParamsHandling: 'merge',
    });
    this.fetchProducts();
  }

  onSearchQuery(searchText: string) {
    // Update categoryId with the selected category IDs
    this.searchText = searchText;
    this.router.navigate(['/products'], {
      queryParams: {
        categoryId: null,
        subCategoryId: null,
        brandId:null,
        searchText: this.searchText,
        page: this.pagination,
      },
      queryParamsHandling: 'merge',
    });
    this.fetchProducts();
  }

  onSelectSubCategories(selectedSubCategoryIds: string[]) {
    // Update categoryId with the selected category IDs
    this.subCategoryIds = selectedSubCategoryIds;
    this.pagination = 1;
    this.searchText = '';

    // Update query params with categoryId parameter
    this.router.navigate([], {
      queryParams: {
        searchText: null,
        subCategoryId: this.subCategoryIds,
        page: 1,
      },
      queryParamsHandling: 'merge',
    });
    this.fetchProducts();
  }

  renderPage(event: number) {
    this.pagination = event;
    this.router.navigate([], {
      queryParams: { page: this.pagination },
      queryParamsHandling: 'merge',
    });
    this.fetchProducts();
  }

  onOrderByChange(orderBy: string) {
    // Update orderBy with the selected value
    this.orderBy = orderBy;
    // Update query params with orderBy parameter
    this.router.navigate([], {
      queryParams: { orderBy: this.orderBy, page: this.pagination },
      queryParamsHandling: 'merge',
    });
    this.fetchProducts();
  }

  resetFilters() {
    // Reset all filters and update query params
    this.orderBy = '';
    this.pagination = 1;
    this.router.navigate([], {
      queryParams: {
        categoryId: [],
        subCategoryId: [],
        brandId:[],
        orderBy: null,
        page: this.pagination,
      },
      queryParamsHandling: 'merge',
    });
    this.filterService.resetFilters();
  }
  onItemClick(id: string) {
    console.log(id);
    let ItemDetailsUrl = 'itemdetails/renter/' + id;
    this.router.navigate([ItemDetailsUrl]);
  }
}
