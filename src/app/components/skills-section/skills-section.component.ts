import { Component } from '@angular/core';
import { SkillItemComponent } from '../skill-item/skill-item.component';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [SkillItemComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent {

}
