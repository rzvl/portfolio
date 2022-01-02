import ProgressBarWithTitle from '../ProgressBarWithTitle';

const CssToolsTab = () => {
  return (
    <div>
      <ProgressBarWithTitle title={'Tailwind CSS'} progress={'90%'} />
      <ProgressBarWithTitle title={'Styled Components'} progress={'70%'} />
      <ProgressBarWithTitle title={'CSS Modules'} progress={'90%'} />
      <ProgressBarWithTitle title={'Bootstrap'} progress={'80%'} />
    </div>
  );
};

export default CssToolsTab;
