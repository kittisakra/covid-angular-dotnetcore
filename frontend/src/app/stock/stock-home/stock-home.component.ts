import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const DATA = [
  { id: 1, productID: '', name: 'Modi dignissimos qui aut dolor quia et incidunt assumenda itaque.', price: 877.00, stock: 224, image: '' },
  { id: 2, productID: '', name: 'At quaerat autem tempore totam tempora.', price: 639.00, stock: 115, image: '' },
  { id: 3, productID: '', name: 'Sunt enim voluptate nisi. Dolorum porro eos quasi. Temporibus voluptas consequuntur vel recusandae eligendi id officiis.', price: 467.00, stock: 25, image: '' },
  { id: 4, productID: '', name: 'Dolores doloribus labore sint ut. Eaque architecto omnis inventore accusamus tempore.', price: 474.00, stock: 25, image: '' },
  { id: 5, productID: '', name: 'Practical Rubber Salad', price: 335.00, stock: 63, image: '' },
  { id: 6, productID: '', name: 'Placeat omnis odio sed libero omnis repudiandae inventore.', price: 356.00, stock: 42, image: '' },
  { id: 8, productID: '', name: 'Sit et deleniti repellendus aliquid eos cumque.', price: 273.00, stock: 53, image: '' },
  { id: 9, productID: '', name: 'Refined Cotton Bike', price: 741.00, stock: 88, image: '' },
  { id: 11, productID: '', name: 'molestias et molestiae', price: 1256.00, stock: 55, image: '' },
  { id: 12, productID: '', name: 'Dolores doloribus labore sint ut. Eaque architecto omnis', price: 555.00, stock: 86, image: '' },
  { id: 13, productID: '', name: 'Dolorum porro eos quasi.', price: 516.00, stock: 245, image: '' },
  { id: 14, productID: '', name: 'Temporibus voluptas consequuntur vel recusandae eligendi id officiis.', price: 316.00, stock: 98, image: '' },
  { id: 15, productID: '', name: 'Eaque architecto omnis', price: 1256.00, stock: 24, image: '' },
  { id: 16, productID: '', name: 'molestias Sunt enim voluptate nisi.', price: 646.00, stock: 67, image: '' },
  { id: 17, productID: '', name: 'Placeat omnis odio molestias et molestiae', price: 543.00, stock: 24, image: '' },
  { id: 18, productID: '', name: 'dolor quia et incidunt assumenda', price: 335.00, stock: 12, image: '' },
]

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {

  //input for search
  textSearch: string = '';

  displayedColumns = ['image', 'name', 'price', 'stock', 'action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.feedData();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  feedData() {
    this.dataSource.data = DATA;
  }

  clearSearch() {
    this.textSearch = '';
    this.search(null);
  }

  search(event: Event) {
    let filterValue = '';
    if (event) {
      filterValue = (event.target as HTMLInputElement).value;
    }

    this.textSearch = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}
