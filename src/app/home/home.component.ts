import { Component, OnInit } from '@angular/core';
import { ApiOperationsService } from '../../api-operations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tree: any = {};
  path_input : string = "";
  name: string = "";
  children:any[];

  constructor(private httpService: ApiOperationsService) { }

  ngOnInit() {
    this.httpService.getTree().subscribe(
      (response) => {
        this.tree = response;
        this.name = this.tree.parent.path;
        this.children = this.tree.parent.children;
      },
      (error) => { console.log(error)}
    )
  }

  queryPath(){
    this.httpService.searchTree(this.path_input).subscribe(
      (response) => {
        this.tree = response;
        this.name = this.tree.parent ? this.tree.parent.path : "Path Not Found";
        this.children =  this.tree.parent ? this.tree.parent.children: [];
      },
      (error) => {
        this.name = "Error Loading Directory";
        this.children = [];
        console.log(error);
      }
    )
    this.path_input = "";
  }

  folderSelect(path:string){
    this.httpService.searchTree(path).subscribe(
      (response) => {
        this.tree = response;
        this.name = this.tree.parent ? this.tree.parent.path : "Path Not Found";
        this.children =  this.tree.parent ? this.tree.parent.children: [];
      },
      (error) => {
        this.name = "Error Loading Directory";
        this.children = [];
        console.log(error);
      }
    )
    this.path_input = "";
  }

  // unitConverter(bytes){
  //   bytes = Number(bytes);
  //   return ( bytes >= Math.pow(10, 9) ? `${bytes/(Math.pow(10,9))} GB` : (bytes >= Math.pow(10, 6) ? `${bytes/(Math.pow(10,6))} MB` : (bytes >= Math.pow(10, 3) ? `${bytes/1000} KB` : `${bytes} B` )) );
  // }

}
