// ADD YOUR TEXT HERE
import { colors } from "./theme.js";

const scrollyContent = [
                        <div className='term-div'>
                          <p className='term-content' style={{color:'black'}}> 
                          Bitcoin's trading volume boomed in 2017 and again in 2020.<br/><br/>
                          We are still riding the 2020 spike indicating more people are interested
                          in this cryptocurrency. 
                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content' style={{color:'black'}}> 
                              The 2017 boom drew a lot of media attention, 
                              but the masses remained skeptical of Bitcoin's use cases.<br /><br />
                              
                              The 2020 surge and Bitcoin's increasing adoption indicates it might be here to stay.<br />
                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content'style={{color:colors.cryptocream}}> 
                          Yearly, Bitcoin consumes as much energy as 6.4 million U.S. households ...
                        </p>
                      </div>,                      
                      <div className='term-div'>
                          <p className='term-content' style={{color:colors.cryptocream}}> 
                          and about as much as the entire U.S. plastics industry.
                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content' style={{color:colors.cryptocream}}> 
                          When we discuss accepting payment in the form of Bitcoin, we should carefully consider the environmental impact.
                          <br/>TODO: Add how we calculated the per transaction energy.
                        </p>
                      </div>,
                      'But why does bitcoin consume an enormous amount of energy? To add valid transactions to the ledger, volunteers have to find a solution to a computationally intensive puzzle based on a ‘hash function’ called SHA-256.',

                      <div className='term-div'>
                        <p className='term-header'>Cryptocurrency</p>
                        <p className='term-content'>
                          A cryptocurrency is a digital currency that is not managed by governments or banks 
                          and is not tied to fiat currencies or other physical assets, e.g., Bitcoin. <br/> <br/>
                          Its transactions are recorded in distributed ledger based on a blockchain.

                        </p>
                      </div>,
                      <div className='term-div'>
                        <p className='term-header'>Blockchain</p>
                        <p className='term-content'>
                          A blockchain is a digital ledger of transactions that is duplicated and 
                          distributed across all the computers responsible for maintaining it. <br/><br/>
                          New transactions are grouped together in blocks before being appended to 
                          the blockchain along with a cryptographic key that can identify its preceding block.  
                          </p>
                      </div>,

                      <div className='term-div'>
                        <p className='term-header'>Cryptocurrency Mining</p>
                        <p className='term-content'>
                          In the Bitcoin blockchain, new blocks are added only if the 
                          the computer suggesting its addition has found the solution to a computationally intensive 
                          puzzle based on a ‘hash function’ called SHA-256. Computers that are able to add blocks
                          are rewarded with bitcoins. Since this process creates bitcoins, it is known as mining.
                          <br/><br/>
                          The protocol for adding new blocks is called a consensus algorithm. 
                          Bitcoin's protocol described above is called Proof of Work (POW).

                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content' style={{color:colors.cryptoblack}}> 
                          The total number of computations (hashes) per second being performed by all miners to 
                          solve the puzzle at any given time is known has hash rate. The Bitcoin system is designed
                          such that the puzzles become harder as more people try to mine bitcoin, thereby increasing 
                          energy consumption.
                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content' style={{color:colors.cryptoblack}}> 
                          Extrapolating the rate of energy consumption the Bitcoin network and its 
                          adoption of renewable energy over the last decade indicates 
                          that its carbon footprint will increase exponentialy.
                        </p>
                      </div>,
                      <div className='term-div'>
                        <p className='term-content term-subheading'>
                          <span style={{color: colors.cryptoorange}}>
                          POW </span>
                          vs <span style={{color: colors.cryptoblue}}>
                          PoS </span> 
                          Algorithms
                        </p>
                        <br/>
                        <p className='term-content'>
                          POW algorithms only allow users to add transactions to the ledger if they
                          have given a proof of computational ‘work’ completed. They are designed 
                          to consume a large amount of energy.
                          <br/><br/>
                          PoS algorithms work
                          for systems where blocks are not ‘mined’ by solving a puzzle, but validated
                          by validators that are selected by the network.
                          <br/><br/>
                          Thus POS is more energy efficient. 
                        </p>
                      </div>,
                      <div className='term-div'>
                        <p className='term-content term-subheading'>
                          Lower bound <span style={{color: colors.cryptopurple}}>
                           consesus algorithm efficiency </span> 
                        </p>
                        <br/>
                        <p className='term-content'>
                          The consensus algorithm determines the type of device that 
                          can be used to add blocks to the blockchain. Since some devices are 
                          more efficient than others, the algorithm determines the overall 
                          energy consumption of the network normalized by trading volume. 
                          <br/><br/>
                          The algos listed are used by the top 20 cryptos in 2020. 
                          <br/><br/>
                          Although Bitcoin uses SHA-256, directing other cryptos to use more efficient 
                          algos can reduce energy consumption. 

                        </p>
                      </div>,
                      <div className='term-div'>
                        <p className='term-content term-subheading'>
                          Enforce <span style={{color: colors.cryptolightgreen}}>
                          environmental regulations </span> on mining farms
                        </p>
                        <br/>
                        <p className='term-content'>
                          Some experts suggest levying a Carbon Tax on mining activity. Some 
                          authorities, like those in Quebec, Canada have increased the cost of 
                          electricity for miners
                        </p>
                      </div>,
                    ]


const sectionContent = [
                        <p className='sectionText'>
                     Bitcoin, the first cryptocurrency, has come a long way since its inception in 2009. <br/> <br/>
                     Individual and commercial entities have shown renewed interest in the cryptocurrency,
                     at least as an investment vehicle. <br/> <br/>
                     This interest is driving its volume and price up -  
                     all the way to the moon, as said in crypto-speak.
                     </p>,
                     
                     <p className='sectionText'>
                          All signs show that bitcoin is moving towards upholding the vision of its 
                          early adoptors by becoming the foundation a functioning decentralized financial system. <br/> <br/>
                          But is it a technology we can sustain in the long run? <br/> <br/>
                          Let's gain some perspective on the massive amount of energy consumed by Bitcoin. 
                      </p>,
                      <p className='sectionText'>
                          What exactly is it about a cryptocurrency and specifically Bitcoin that makes 
                          it so energy intensive? <br/><br/>
                          Let's understand how cryptocurrencies work in order to ponder on how to make Bitcoin sustainable. 
                      </p>,
                      <p className='sectionText'>
                          We have identified three key actions that will mitigate the environmental 
                          impact of cryptocurrencies:<br/><br/>
                          <ol style={{marginLeft:'50px',lineHeight:1.4}}>
                          <li>
                          Move from <span style={{color: colors.cryptoorange}}>
                          Proof of Work (POW) </span>
                          to <span style={{color: colors.cryptoblue}}>
                          Proof of Stake (PoS) </span> 
                          Algorithms
                          </li>
                          <li> Apply lower bounds on <span style={{color: colors.cryptopurple}}>
                           consensus algorithm efficiency </span>   </li>
                          <li> Enforce <span style={{color: colors.cryptolightgreen}}>
                          environmental regulations </span> on mining farms</li>
                          </ol> <br/>
                          Let's explore why these actions are sensible.
                      </p>
                    ]


export  { scrollyContent as scrollyContent}
export {sectionContent}

/* `A cryptocurrency is a digital currency that is not managed by governments or banks 
                    and is not tied to fiat currencies or other physical assets. 

                    It is based on publicly available ledger with a history of all the transactions.

                    Since no central system controls its value, and anyone can contribute to maintain the 
                    currency, it is eulogized for democratizing money.`,
                    `Bitcoin has an enormous energy footprint.`*/
/*
                      <h5>Some Terminology-</h5>,
                      <div className='term-div'>
                        <p className='term-header'>Cryptocurrency Mining</p>
                        <p className='term-content'>
                          is responsible for introducing new coins into the existing circulating supply and is one of the key elements that allow cryptocurrencies to work as a peer-to-peer decentralized network, without the need for a third party central authority.   It is also the process in which transactions between users are verified and added to the blockchain public ledger.
                        </p>
                      </div>,
                      <div className='term-div'>
                        <p className='term-header'>Blockchain</p>
                        <p className='term-content'>
                          is a list of data records that works as a decentralized digital ledger. The data is organized into blocks, which are chronologically arranged and secured by cryptography.
                        </p>
                      </div>,
                      <div className='term-div'>
                        <p className='term-header'>Bitcoin</p>
                        <p className='term-content'>
                          is the original cryptocurrency and it remains the go-to leader of the space. They are also the most popular and well-established example of a mineable cryptocurrency
                        </p>
                      </div>,
*/