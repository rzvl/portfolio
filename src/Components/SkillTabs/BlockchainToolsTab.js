import ProgressBarWithTitle from '../ProgressBarWithTitle';

const BlockchainToolsTab = () => {
  return (
    <div>
      <ProgressBarWithTitle
        title={'Truffle'}
        progress={'60%'}
        barId={'truffle'}
      />
      <ProgressBarWithTitle title={'Web3 JS'} progress={'20%'} barId={'web3'} />
    </div>
  );
};

export default BlockchainToolsTab;
