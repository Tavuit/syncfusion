import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from '@syncfusion/ej2-angular-navigations';

type IExpandMode = 'Single' | 'Multiple';
interface IAccordionDataType {
  expanded: boolean;
  headerText: string;
  contentText: string
}

@Component({
  selector: 'sync-accordion',
  standalone: true,
  imports: [CommonModule, AccordionModule],
  templateUrl: './sync-accordion.component.html',
  styleUrls: ['./sync-accordion.component.scss']
})
export class SyncAccordionComponent implements OnInit {
  @Input() expandMode: IExpandMode = 'Single';
  @Input() accordionData: IAccordionDataType[] = [
    {
      expanded: true,
      headerText: 'ASP.NET',
      contentText: 'The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view'
    },
    {
      expanded: false,
      headerText: 'Javascript',
      contentText: 'The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view'
    }
  ];
  ngOnInit(): void {

  }
}
