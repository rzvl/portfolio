import ProgressBarWithTitle from '../ProgressBarWithTitle';

const GeneralToolsTab = () => {
  return (
    <div>
      <ProgressBarWithTitle title={'Git'} progress={'80%'} />
      <ProgressBarWithTitle title={'GitHub'} progress={'80%'} />
      <ProgressBarWithTitle title={'NPM'} progress={'90%'} />
      <ProgressBarWithTitle title={'Yarn'} progress={'75%'} />
      <ProgressBarWithTitle title={'Webpack'} progress={'50%'} />
    </div>
  );
};

export default GeneralToolsTab;
