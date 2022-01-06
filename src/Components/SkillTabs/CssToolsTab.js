import ProgressBarWithTitle from '../ProgressBarWithTitle';

const CssToolsTab = () => {
  return (
    <div>
      <ProgressBarWithTitle
        title={'Tailwind CSS'}
        progress={'90%'}
        barId={'tailwindcss'}
      />
      <ProgressBarWithTitle
        title={'Styled Components'}
        progress={'70%'}
        barId={'styledcomponents'}
      />
      <ProgressBarWithTitle
        title={'CSS Modules'}
        progress={'90%'}
        barId={'cssmodules'}
      />
      <ProgressBarWithTitle
        title={'Bootstrap'}
        progress={'80%'}
        barId={'bootstrap'}
      />
    </div>
  );
};

export default CssToolsTab;
