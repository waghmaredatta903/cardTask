import { Component } from '@angular/core';
import { IaiArr, IbiologyArr, IbusinessArr, IcloudArr, IdatabaseArr, IeducationArr, IgraphyArr, ImathArr, IpsychologyArr, IroboticsArr, ItechToolsArr, IwebDevArr } from './module/Interface';
import { aiArr, businessArr, mathArr,roboticsArr,geographyArr,psychologyArr, biologyArr,techToolsArr, educationArr,cloudArr,webDevArr,databaseArr} from './const/cardData';
//import { roboticsArr } from './const/cardData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cardTask';
  aiArr:Array<IaiArr> = aiArr ;
  mathArray : Array<ImathArr>=mathArr;
  roboticsArr : Array<IroboticsArr> = roboticsArr;
  busiArr :Array<IbusinessArr>= businessArr;
  graphyArr : Array<IgraphyArr> = geographyArr;
  psyArr : Array<IpsychologyArr> = psychologyArr;
  bioArr : Array<IbiologyArr>= biologyArr;
  techtool : Array<ItechToolsArr>= techToolsArr;
  eduArr : Array<IeducationArr>= educationArr;
  cldArr : Array<IcloudArr>= cloudArr;
  webdevArr : Array<IwebDevArr>=webDevArr;
  databArr : Array<IdatabaseArr>=databaseArr;
  // mathArray : ImathArr[] = mathArr
}
