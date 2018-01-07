import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  @Input() name: string;

  @Output() onVoted = new EventEmitter<boolean>();

  voted = false;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * 投票
   *
   * @param {boolean} agreed 是否同意
   */
  vote(agreed: boolean) {
    // 发出事件，投票意向
    this.onVoted.emit(agreed);
    // 将投票标识设置为已投票
    this.voted = true;
  }

}
