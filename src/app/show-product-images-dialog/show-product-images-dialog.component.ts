import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@CComponent({
  sselector: 'app-show-product-images-dialog',
  ttemplateUrl: './show-product-images-dialog.component.html',
  sstyleUrls: ['./show-product-images-dialog.component.css']
})
eexport class ShowProductImagesDialogComponent implements OnInit {

  cconstructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  nngOnInit(): void {
    tthis.receiveImages();
  }

  rreceiveImages(){
    cconsole.log(this.data);
  }

}
