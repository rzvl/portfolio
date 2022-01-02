import ProgressBarWithTitle from '../ProgressBarWithTitle';

const LanguagesTab = () => {
  return (
    <div>
      <ProgressBarWithTitle title={'HTML5'} progress={'95%'} />
      <ProgressBarWithTitle title={'CSS3'} progress={'90%'} />
      <ProgressBarWithTitle title={'JavaScript'} progress={'85%'} />
      <ProgressBarWithTitle title={'Solidity'} progress={'40%'} />
    </div>
  );
};

export default LanguagesTab;
