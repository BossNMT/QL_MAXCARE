import { Slider } from 'antd';
import './ModalInput.scss';

interface PropsSlider {
  title: string;
  min: number;
  max: number;
}

const SliderModal = ({ title, min, max }: PropsSlider) => {
  return (
    <div>
      <div className="slider" style={{ padding: '11px 25.5px' }}>
        <div className="form-title letter-spacing-0" style={{ marginTop: '-1px' }}>
          {title}
        </div>
      </div>
      <Slider className="slider-modal" style={{ margin: '10px 32px 10px' }} range min={min} max={max} />
    </div>
  );
};

export default SliderModal;
