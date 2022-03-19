import {async, inject, TestBed} from '@angular/core/testing';

import {CalculatorService} from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  }));

  it('should ...', inject([CalculatorService],
    (service: CalculatorService) => {
      expect(service).toBeTruthy();
    }));

  it('must ensure that 1 + 4 = 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let soma = service.calculate(1, 4, CalculatorService.SUM);
      expect(soma).toEqual(5);
    })
  );

  it('must ensure that 1 - 4 = -3',
    inject([CalculatorService], (service: CalculatorService) => {
      let subtraction = service.calculate(1, 4, CalculatorService.SUBTRACTION);
      expect(subtraction).toEqual(-3);
    })
  );

  it('must ensure that 1 / 4 = 0.25',
    inject([CalculatorService], (service: CalculatorService) => {
      let division = service.calculate(1, 4, CalculatorService.DIVISION);
      expect(division).toEqual(0.25);
    })
  );

  it('must ensure that 1 * 4 = 4',
    inject([CalculatorService], (service: CalculatorService) => {
      let multiplication = service.calculate(1, 4, CalculatorService.MULTIPLICATION);
      expect(multiplication).toEqual(4);
    })
  );

  it('must return 0 for invalid operation',
    inject([CalculatorService], (service: CalculatorService) => {
      let invalidOperation = service.calculate(1, 4, '%');
      expect(invalidOperation).toEqual(0);
    })
  );
});
