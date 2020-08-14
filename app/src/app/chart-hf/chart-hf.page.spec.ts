import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChartHFPage } from './chart-hf.page';

describe('ChartHFPage', () => {
  let component: ChartHFPage;
  let fixture: ComponentFixture<ChartHFPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartHFPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartHFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
