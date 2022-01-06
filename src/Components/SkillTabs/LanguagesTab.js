import ProgressBarWithTitle from '../ProgressBarWithTitle';

const LanguagesTab = () => {
  return (
    <div>
      <ProgressBarWithTitle title={'HTML5'} progress={'95%'} barId={'html5'} />
      <ProgressBarWithTitle title={'CSS3'} progress={'90%'} barId={'css3'} />
      <ProgressBarWithTitle
        title={'JavaScript'}
        progress={'85%'}
        barId={'javascript'}
      />
      <ProgressBarWithTitle
        title={'Solidity'}
        progress={'40%'}
        barId={'solidity'}
      />
    </div>
  );
};

export default LanguagesTab;
