import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NetworkService } from 'src/app/services/network.service';
import { Router } from '@angular/router';

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

  constructor(
    private networkService: NetworkService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.feedData();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  feedData() {
    this.networkService.getProducts().subscribe(
      res => {
        this.dataSource.data = res.map(item => {
          item.image = this.networkService.getProductImageURL(item.image);
          return item;
        })
      },
      error => {
        console.log(JSON.stringify(error));
      }
    );
  }

  deleteProduct(id: number) {
    this.networkService.deleteProduct(id).subscribe(
      res => {
        alert("Delete successful");
        this.feedData();
      },
      error => {
        alert("Delete failed");
      }
    );
  }

  editProduct(id: number) {
    this.router.navigate([`stock/edit/${id}`]);
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
