import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Camera } from 'ionic-native';

import { Photo } from './../photo';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  photos: Photo[] = [new Photo("https://r2y2n2d9.ssl.hwcdn.net/cds/eyeiq/moneyBasics/1674/images/Presbyopia-350-x-150.jpg", 5), new Photo("https://r2y2n2d9.ssl.hwcdn.net/cds/eyeiq/moneyBasics/475/images/Blog-25-350-x-150.jpg", 6)];

   takePhoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetHeight: 500,
      targetWidth: 500,
      correctOrientation: true
    }).then((imageData) => {
      this.photos.push(new Photo("data:image/jpeg;base64," + imageData, 0));
    }, (err) => {
      console.log(err);
    });
  }

  deletePhoto(photo) {
    this.photos.splice(this.photos.indexOf(photo), 1);
  }

  likePhoto(photo) {
    photo.likes++;
  }

}
