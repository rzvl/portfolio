import ProgressBarWithTitle from '../ProgressBarWithTitle';

const GeneralToolsTab = () => {
  return (
    <div>
      <ProgressBarWithTitle title={'Git'} progress={'80%'} barId={'git'} />
      <ProgressBarWithTitle
        title={'GitHub'}
        progress={'80%'}
        barId={'github'}
      />
      <ProgressBarWithTitle title={'NPM'} progress={'90%'} barId={'npm'} />
      <ProgressBarWithTitle title={'Yarn'} progress={'75%'} barId={'yarn'} />
      <ProgressBarWithTitle
        title={'Webpack'}
        progress={'50%'}
        barId={'webpack'}
      />
    </div>
  );
};

export default GeneralToolsTab;
