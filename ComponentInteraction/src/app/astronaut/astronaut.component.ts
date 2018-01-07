import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MissionService} from '../mission.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.css']
})
export class AstronautComponent implements OnInit, OnDestroy {

  /**
   * 宇航员
   */
  @Input() astronaut: string;

  /**
   * 任务
   * @type {string}
   */
  mission = '<no mission announced>';

  /**
   * 证实
   * @type {boolean}
   */
  confirmed = false;

  /**
   * 宣布
   * @type {boolean}
   */
  announced = false;

  /**
   * 订阅
   * @type {Subscription}
   */
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(mission => {
      // 记录任务
      this.mission = mission;
      // 是否已宣布
      this.announced = true;
      // 是否被证实
      this.confirmed = false;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // 防止组件被破坏时的内存泄漏
    this.subscription.unsubscribe();
  }

  confirm() {
    // 已经被证实
    this.confirmed = true;
    // 证实任务
    this.missionService.confirmMission(this.astronaut);
  }

}
