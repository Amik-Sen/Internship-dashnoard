import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChartHAPage } from './chart-ha.page';

describe('ChartHAPage', () => {
  let component: ChartHAPage;
  let fixture: ComponentFixture<ChartHAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartHAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartHAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
