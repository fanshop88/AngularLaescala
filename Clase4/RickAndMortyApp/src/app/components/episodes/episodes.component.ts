import { Component, OnInit, Input } from '@angular/core';
import { Episode, IResponse } from 'src/app/interfaces';
import { PortalService } from 'src/app/services/portal.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  @Input() episodeUrl:string;
  episode:Episode = new Episode();

  constructor(private portalService:PortalService) { }

  ngOnInit() {
    this.getEpisode();
  }

  getEpisode(): void {
    this.portalService.getEpisodeByUrl(this.episodeUrl).subscribe((data: Episode) => {
      this.episode = data;
    });
  }
}
