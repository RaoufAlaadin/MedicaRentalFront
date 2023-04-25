export class UpdateUserItemDto {
  constructor(
    public id : string,
    public name :string,
    public description :string,
    public serial :string,
    public model :string,
    public  stock : number,
    public  price : Number,
    public image :string,
    public isListed: boolean=true,
    public  brandId : string,
    public  categoryId : string,
    public  subCategoryId : string
    ) {}
}
