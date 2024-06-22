import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {YenValue} from './yenValue/yenValue.component';
import {UsdValue} from './usdValue/usdValue.component';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled;
  let usdValue;
  let yenValue;

  const TEST_IDS = {
    yenValue: 'yen-value',
    usdValue: 'usd-value'
  }

  const getByTestId = (id, parentNode?) => {
    if (!parentNode) {
      parentNode = compiled;
    }
    return parentNode.querySelector(`[data-test-id="${id}"]`);
  };

  const pushValueToInput = async (input, value) => {
    input.value = value;
    input.dispatchEvent(new Event('change'));
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    await fixture.detectChanges();
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        YenValue,
        UsdValue
      ],
      providers: [],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.autoDetectChanges(true);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    await fixture.detectChanges();
    await fixture.whenStable();

    usdValue = getByTestId(TEST_IDS.usdValue);
    yenValue = getByTestId(TEST_IDS.yenValue);
  });

  it('check if yen to usd conversion works', async() => {
    await pushValueToInput(yenValue, 150);

    usdValue = getByTestId(TEST_IDS.usdValue);
    expect(Number(usdValue.value.trim())).toEqual(150 * 110);
  });

  it('check if usd to yen conversion works', async() => {
    await pushValueToInput(usdValue, 10000);

    yenValue = getByTestId(TEST_IDS.yenValue);
    expect(Number(yenValue.value.trim())).toEqual(10000 / 0.0090);
  });

  it('check if you can write in usd and yen fields without page refresh and deleting value in text area is possible', async() => {
    await pushValueToInput(yenValue, 500);

    usdValue = getByTestId(TEST_IDS.usdValue);
    expect(Number(usdValue.value.trim())).toEqual(500 * 110);

    await pushValueToInput(usdValue, 300);

    yenValue = getByTestId(TEST_IDS.yenValue);
    expect(Number(yenValue.value.trim())).toEqual(300 / 0.0090);

    await pushValueToInput(usdValue, '');

    yenValue = getByTestId(TEST_IDS.yenValue);
    expect(yenValue.value.trim()).toBeFalsy();

    await pushValueToInput(yenValue, 180);

    usdValue = getByTestId(TEST_IDS.usdValue);
    expect(Number(usdValue.value.trim())).toEqual(180 * 110);

    await pushValueToInput(yenValue, '');

    usdValue = getByTestId(TEST_IDS.usdValue);
    expect(usdValue.value.trim()).toBeFalsy();
  });

  it('check if you can write in usd and yen fields if field not empty', async() => {
    await pushValueToInput(yenValue, 165);

    usdValue = getByTestId(TEST_IDS.usdValue);
    expect(Number(usdValue.value.trim())).toEqual(165 * 110);

    await pushValueToInput(usdValue, 180);

    yenValue = getByTestId(TEST_IDS.yenValue);
    expect(Number(yenValue.value.trim())).toEqual(180 / 0.0090);

    await pushValueToInput(usdValue, 463);

    yenValue = getByTestId(TEST_IDS.yenValue);
    expect(Number(yenValue.value.trim())).toEqual(463 / 0.0090);
  });
});
