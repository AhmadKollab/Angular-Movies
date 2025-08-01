import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CURD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { TheatersService } from '../theaters.service';
import { IndexEntitiesComponent } from "../../shared/components/index-entities/index-entities.component";

@Component({
  selector: 'app-index-theaters',
  imports: [MatButtonModule, MatIconModule, RouterLink, IndexEntitiesComponent],
  templateUrl: './index-theaters.component.html',
  styleUrl: './index-theaters.component.css',
  providers : [
    {provide : CURD_SERVICE_TOKEN , useClass : TheatersService}
  ]
})
export class IndexTheatersComponent {

}
