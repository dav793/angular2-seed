
import { FieldBase } from './field-base';

export class FieldTextbox extends FieldBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: any) {
    super(options);
    this.type = options['type'] || '';
  }
}
