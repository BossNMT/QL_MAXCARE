import { Radio, Space } from 'antd';

interface PropsForm {
  title?: string;
  listChoice: string[];
  onChange: any;
  value: any;
  direction: 'vertical' | 'horizontal' | undefined;
}

const RadioForm = ({ title, listChoice, onChange, value, direction }: PropsForm) => {
  return (
    <div className="form-groups" style={{ padding: '12px 25px' }}>
      <div className="form-title letter-spacing-0" style={{ marginTop: '0' }}>
        {title}
      </div>
      <Radio.Group style={{ margin: '9px 0 0 1px' }} onChange={onChange} value={value}>
        <Space wrap={true} className="letter-spacing-0" direction={direction}>
          {listChoice.map((choice, index) => {
            return (
              <Radio key={index} style={{ color: '#999' }} value={index + 1}>
                {choice}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default RadioForm;
