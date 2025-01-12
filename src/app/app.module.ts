import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ProductsService } from './Services/Products/products.service';
import { CategoriesFilterComponent } from './Components/categories-filter/categories-filter.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriesService } from './Services/Categories/categories.service';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AvailableComponent } from './Components/available/available.component';
import { BrandComponent } from './Components/brand/brand.component';
import { BestRentalsComponent } from './Components/best-rentals/best-rentals.component';
import { AddsComponent } from './Components/adds/adds.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { EmailErrorComponent } from './Components/EmailError/email-error/email-error.component';
import { NationalIDErrorComponent } from './Components/NationalIDError/national-iderror/national-iderror.component';
import {
  AuthInterceptor,
  AuthResponseInterceptor,
} from 'InterCeptors/auth.interceptor';
import { ChatComponent } from './Components/Chat/chat/chat.component';
import { MessageComponent } from './Components/Chat/message/message.component';
import { DateComponent } from './Components/Chat/date/date.component';
import { NgOptimizedImage } from '@angular/common';
import { NotificationComponent } from './Components/Chat/notification/notification.component';

import { ChatUserComponent } from './Components/Chat/chat-user/chat-user.component';
import { MyAccountComponent } from './Components/UserComponents/my-account/my-account.component';
import { ListedItemsComponent } from './Components/UserComponents/listed-items/listed-items.component';
import { RentedItemsComponent } from './Components/UserComponents/rented-items/rented-items.component';
import { OnRentItemsComponent } from './Components/UserComponents/on-rent-items/on-rent-items.component';
import { RentedItemsHistoryComponent } from './Components/UserComponents/rented-items-history/rented-items-history.component';
import { OnRentItemsHistoryComponent } from './Components/UserComponents/on-rent-items-history/on-rent-items-history.component';
import { UnlistedItemsComponent } from './Components/UserComponents/unlisted-items/unlisted-items.component';
import { ProfileComponent } from './Components/UserComponents/profile/profile.component';
import { MyAccountNavbarComponent } from './Components/UserComponents/my-account-navbar/my-account-navbar.component';
import { ItemDetailsRenterComponent } from './Components/item-details-renter/item-details-renter.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { PaginationComponent } from './Components/pagination/pagination.component';
import { SearchComponent } from './Components/search/search.component';
import { ListOrderByComponent } from './Components/UserComponents/OrderByComponents/list-order-by/list-order-by.component';
import { RentOrderByComponent } from './Components/UserComponents/OrderByComponents/rent-order-by/rent-order-by.component';
import { Forbidden403Component } from './Components/Errors/forbidden403/forbidden403.component';
import { NotFound404Component } from './Components/Errors/not-found404/not-found404.component';
import { ItemDetailsSellerComponent } from './Components/item-details-seller/item-details-seller/item-details-seller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BlockUsersComponent } from './Components/AdminComponents/block-users/block-users.component';
import { PendingApprovalsComponent } from './Components/AdminComponents/pending-approvals/pending-approvals.component';
import { PendingApprovalsDetailsComponent } from './Components/AdminComponents/pending-approvals-details/pending-approvals-details.component';
import { ReportsComponent } from './Components/AdminComponents/reports/reports.component';
import { ReportDetailsComponent } from './Components/AdminComponents/report-details/report-details.component';

import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';

import { ReportModalComponent } from './Components/report-modal/report-modal.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { AdminPanelComponent } from './Components/AdminComponents/admin-panel/admin-panel.component';
import { ChatAreaComponent } from './Components/Chat/chat-area/chat-area.component';
import { CategoriesComponent } from './Components/AdminComponents/Categories/categories/categories.component';
import { CdkTableModule } from '@angular/cdk/table';
import { DeleteConfirmationModalComponent } from './Components/delete-confirmation-modal/delete-confirmation-modal.component';
import { ManageCategoriesComponent } from './Components/AdminComponents/Categories/manage-categories/manage-categories.component';
import { ManageCategoriesNavbarComponent } from './Components/AdminComponents/Categories/manage-categories-navbar/manage-categories-navbar.component';
import { SubcategoriesComponent } from './Components/AdminComponents/Categories/subcategories/subcategories.component';
import { CategoryModalComponent } from './Components/AdminComponents/Categories/category-modal/category-modal.component';
import { SubcategoryModalComponent } from './Components/AdminComponents/Categories/subcategory-modal/subcategory-modal.component';

import { CartComponent } from './Components/cart/cart.component';
import { CartItemCardComponent } from './Components/cart-item-card/cart-item-card.component';

import { RolesManagerComponent } from './Components/AdminComponents/roles-manager/roles-manager.component';
import { BrandsFilterComponent } from './Components/brands-filter/brands-filter.component';
import { AddItemComponent } from './Components/Adding-new-item/add-item/add-item.component';
import { BrandCardComponent } from './Components/brand-card/brand-card.component';
import { ReportModalV2Component } from './Components/report-modalV2/report-modal-v2/report-modal-v2.component';
import { RentOperationsComponent } from './Components/AdminComponents/Rent/rent-operations/rent-operations.component';
import { ReturnTodayComponent } from './Components/AdminComponents/Rent/return-today/return-today.component';
import { PastDueComponent } from './Components/AdminComponents/Rent/past-due/past-due.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductCardComponent,
    CategoriesFilterComponent,
    NavbarComponent,
    AvailableComponent,
    BrandComponent,
    BestRentalsComponent,
    AddsComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    EmailErrorComponent,
    NationalIDErrorComponent,
    RegistrationComponent,
    MyAccountComponent,
    ListedItemsComponent,
    RentedItemsComponent,
    OnRentItemsComponent,
    RentedItemsHistoryComponent,
    OnRentItemsHistoryComponent,
    UnlistedItemsComponent,
    ProfileComponent,
    MyAccountNavbarComponent,
    ItemDetailsRenterComponent,
    ReviewsComponent,
    PaginationComponent,
    SearchComponent,
    ListOrderByComponent,
    RentOrderByComponent,
    Forbidden403Component,
    NotFound404Component,
    ChatComponent,
    MessageComponent,
    DateComponent,
    NotificationComponent,
    ReportsComponent,
    ReportDetailsComponent,
    ChatUserComponent,
    ItemDetailsSellerComponent,
    BlockUsersComponent,
    PendingApprovalsComponent,
    PendingApprovalsDetailsComponent,
    ReportsComponent,
    ReportDetailsComponent,

    FooterComponent,
    AboutComponent,
    ContactComponent,

    ReportModalComponent,
    ReportDetailsComponent,
    LoadingComponent,
    AdminPanelComponent,
    ChatAreaComponent,
    CategoriesComponent,
    DeleteConfirmationModalComponent,
    ManageCategoriesComponent,
    ManageCategoriesNavbarComponent,
    SubcategoriesComponent,
    CategoryModalComponent,
    SubcategoryModalComponent,
    CartComponent,
    CartItemCardComponent,
    RolesManagerComponent,
    BrandsFilterComponent,
    AddItemComponent,
    BrandCardComponent,
    ReportModalV2Component,
    RentOperationsComponent,
    ReturnTodayComponent,
    PastDueComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgOptimizedImage,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    CdkTableModule,
  ],
  providers: [
    ProductsService,
    CategoriesService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
