import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeListItem } from '../../models/typelistitem';
import { PokemonType } from '../../models/pokemontype';
import { TypeService } from '../../type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppRoutes } from 'src/app/global';

@Component({
  selector: 'app-type-container',
  templateUrl: './type-container.component.html',
  styleUrls: ['./type-container.component.scss']
})
export class TypeContainerComponent implements OnInit {

  types: Observable<TypeListItem[]>;

  constructor(private typeService: TypeService, private router: Router, private route: ActivatedRoute) { }

  loadDetail(name) {
    this.router.navigate([AppRoutes.TYPE_DETAILS, name], { relativeTo: this.route });
  }

  ngOnInit() {
    this.types = this.typeService.fetchAllTypes();
  }

}
