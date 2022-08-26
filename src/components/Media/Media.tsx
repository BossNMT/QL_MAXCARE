import './Media.scss';
interface PropsMedia {
  update: string;
  detail: string;
  time: string;
  looked: boolean;
}

const Media = ({ update, detail, time, looked }: PropsMedia) => {
  return (
    <div className="media-wrapper">
      <div
        className="media-body cursor-pointer letter-spacing-0 font-12"
        style={{
          padding: '11.5px 18.5px 10.5px 18.5px',
          borderBottom: '1px solid #ddd',
          lineHeight: '18px',
        }}
      >
        <div className="media-update" style={{ color: '#ebc71d', lineHeight: '18px', fontWeight: 'bolder' }}>
          {update}
        </div>
        <div className="media-detail">
          {looked ? (
            <a style={{ color: '#9ca09c' }} href="/">
              {detail}
            </a>
          ) : (
            <a className="looked" style={{ color: '#72c02c' }} href="/">
              {detail}
            </a>
          )}
        </div>
        <div className="media-time" style={{ color: '#9ca09c' }}>
          {time}
        </div>
      </div>
    </div>
  );
};

export default Media;
