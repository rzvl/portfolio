import ProgressBarWithTitle from '../ProgressBarWithTitle';

const BlockchainToolsTab = () => {
  return (
    <div>
      <ProgressBarWithTitle title={'Truffle'} progress={'60%'} />
      <ProgressBarWithTitle title={'Web3 JS'} progress={'20%'} />
    </div>
  );
};

export default BlockchainToolsTab;
