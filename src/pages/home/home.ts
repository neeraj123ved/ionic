import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';
import { MusicsProvider } from '../../providers/musics/musics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public allMusic = [];
  constructor(public navCtrl: NavController,
      private musicProvider: MusicsProvider,
      public loadController: LoadingController,
        public actionSheetController :ActionSheetController) {
  }
  ionViewDidLoad() {
      let allMusicLoadingController = this.loadController.create({
         content: "getting your songs from server"
      });

      allMusicLoadingController.present();

      this.musicProvider.getMusic()
      .subscribe((musicList) =>
          { allMusicLoadingController.dismiss();
            this.allMusic= musicList });
  }

  shareSong(){
      let shareSongactionSheet = this.actionSheetController.create({
         title: "share song",
         buttons: [{
            text: "share on facebook",
            icon: "logo-facebook"

        },
        {
            text: "Twitter",
            icon: "logo-twitter"
        },
        {
            text: "share",
            icon: "share"
        },
        {
            text: "cancel",
            role: "destructive"
        }
    ]
    
      });
      shareSongactionSheet.present();
  }
}
