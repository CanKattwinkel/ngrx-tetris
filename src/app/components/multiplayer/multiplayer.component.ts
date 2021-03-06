import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Init, Tick } from '../../store/actions/actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state.model';
import { Keymap } from '../../models/keymap/keymap.model';
import { interval } from 'rxjs/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import { AudioService } from '../../services/audio/audio.service';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiplayerComponent implements OnInit, OnDestroy {

  playerOne: Keymap = {
    left: 'KeyA',
    right: 'KeyD',
    rotate: 'KeyW',
    tick: 'KeyS',
    drop: 'KeyE',
  };

  playerTwo: Keymap = {
    left: 'ArrowLeft',
    right: 'ArrowRight',
    rotate: 'ArrowUp',
    tick: 'ArrowDown',
    drop: 'Space',
  };

  constructor(private store: Store<AppState>, private audio: AudioService) {
  }

  ngOnInit() {
    this.store.dispatch(new Init(2));
    this.audio.play('SugarplumFairy.wav', true);
  }

  ngOnDestroy() {
    this.audio.pause();
  }

}
