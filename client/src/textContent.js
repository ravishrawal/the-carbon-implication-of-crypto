// ADD YOUR TEXT HERE
import { colors } from "./theme.js";

const scrollyContent = [
                        <div className='term-div'>
                          <p className='term-content' style={{color:'black'}}> 
                          Bitcoin's trading volume boomed in 2017 and again in 2020.<br/><br/>
                          We are still riding the 2020 spike indicating more people are interested
                          in this cryptocurrency.<sup className="superscript">1</sup>
                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content' style={{color:'black'}}> 
                              The 2017 boom drew a lot of media attention, 
                              but the masses remained skeptical of Bitcoin's use cases.<br /><br />
                              
                              The 2020 surge and Bitcoin's increasing adoption indicates it might be here to stay.
                              <sup className="superscript">1</sup><br />
                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content'style={{color:colors.cryptocream}}> 
                          Yearly, Bitcoin consumes as much energy as 6.4 million U.S. households...
                          <sup className="superscript">2,3,4,5</sup>
                        </p>
                      </div>,                      
                      <div className='term-div'>
                          <p className='term-content' style={{color:colors.cryptocream}}> 
                          and about as much as the entire U.S. plastics industry.
                          <sup className="superscript">6</sup>
                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content' style={{color:colors.cryptocream}}> 
                          When we discuss accepting payment in the form of Bitcoin, we should carefully consider the environmental impact.
                          <sup className="superscript">7,8</sup>
                          <br/>
                        </p>
                      </div>,

                      <div className='term-div'>
                        <p className='term-header'>Cryptocurrency</p>
                        <p className='term-content'>
                          A cryptocurrency is a digital currency that is not managed by governments or banks 
                          and is not tied to fiat currencies or other physical assets, e.g., Bitcoin. <br/> <br/>
                          Its transactions are recorded in a distributed ledger based on a blockchain.
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
                          puzzle based on a ‘hash function’ called SHA-256. Computers that are able to crack the code and add blocks
                          are rewarded with Bitcoins. Since this process creates Bitcoins, it is known as mining.
                          <br/><br/>
                          The protocol for adding new blocks is called a consensus algorithm. 
                          Bitcoin's protocol described above is called Proof of Work (PoW).

                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content' style={{color:colors.cryptoblack}}> 
                          The total number of computations (hashes) per second being performed by all miners to 
                          solve the puzzle at any given time is known as the hash rate. The Bitcoin system is designed
                          such that the puzzles become harder as more people try to mine Bitcoin, thereby increasing 
                          energy consumption.<sup className="superscript">1,2</sup>
                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content' style={{color:colors.cryptoblack}}> 
                          Extrapolating the rate of energy consumption of the Bitcoin network and its 
                          adoption of renewable energy over the last decade indicates 
                          that its carbon footprint will increase exponentially.
                          <sup className="superscript">9,10</sup>
                        </p>
                      </div>,
                      <div className='term-div'>
                        <p className='term-content term-subheading'>
                          <span style={{color: colors.cryptoorange}}>
                          PoW </span>
                          vs <span style={{color: colors.cryptoblue}}>
                          PoS </span> 
                          Algorithms
                        </p>
                        <br/>
                        <p className='term-content'>
                          PoW algorithms only allow users to add transactions to the ledger if they
                          have given a proof of computational ‘work’ completed. Thus they reward miners based on the
                          computational power they provide and, thus, the energy they expend.
                          <br/><br/>
                          PoS algorithms work
                          for systems where blocks are not ‘mined’ by solving a puzzle, but validated
                          by validators that are selected by the network.
                          <br/><br/>
                          Ethereum, the #2 cryptocurrency by market cap, is making the switch, and 
                          stands to reduce energy consumption by 99%, by some estimates.
                          <sup className="superscript">11</sup>
                        </p>
                      </div>,
                      <div className='term-div'>
                        <p className='term-content term-subheading'>
                          Enforce a minimum <span style={{color: colors.cryptopurple}}>
                           consensus algorithm efficiency. </span> 
                        </p>
                        <br/>
                        <p className='term-content'>
                          The consensus algorithm determines the type of machine that 
                          can be used to add blocks to the blockchain. Since some machines are 
                          more efficient than others, the algorithm determines the overall 
                          energy consumption of the network, normalized by trading volume. 
                          <br/><br/>
                          The algorithms listed are used by the top 20 cryptocurrencies in 2020.
                          <sup className="superscript">12</sup> 
                          <br/><br/>
                          Bitcoin uses SHA-256, which is an efficient PoW model. In the short-term we can 
                          require other cryptocurrencies to achieve similar effiencies. 
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
                          electricity for miners. <sup className="superscript">13</sup>
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
                          early adopters by becoming the foundation of a functioning decentralized financial system. <br/> <br/>
                          But is it a technology we can sustain in the long run? <br/> <br/>
                          Let's gain some perspective on the massive amount of energy consumed by Bitcoin. 
                      </p>,
                      <p className='sectionText'>
                          What exactly is it about a cryptocurrency and specifically Bitcoin that makes 
                          it so energy intensive? <br/><br/>
                          Let's dive deeper to understand how cryptocurrencies work. 
                      </p>,
                      <p className='sectionText'>
                          We have identified three key actions that will mitigate the environmental 
                          impact of cryptocurrencies:<br/><br/>
                          <ol style={{marginLeft:'50px',lineHeight:1.4}}>
                          <li>
                          Move from <span style={{fontWeight:"400"}}>
                          Proof of Work (PoW) </span>
                          to <span style={{fontWeight:"400"}}>
                          Proof of Stake (PoS) </span> 
                          Algorithms
                          </li>
                          <li> Apply lower bounds on <span style={{fontWeight:"400"}}>
                           consensus algorithm efficiency </span>   </li>
                          <li> Enforce <span style={{fontWeight:"400"}}>
                          environmental regulations </span> on mining farms</li>
                          </ol> <br/>
                          Let's discuss these further.
                      </p>,
                      <p className='sectionText bibliographyText'>
                        <ol>
                          <li>Bitcoin Currency Statistics: <a href="https://knoema.com/BITCONCS/bitcoin-currency-statistics-daily-update">Knoema Dataset</a></li>
                          <li>Bitcoin Energy Consumption: <a href="https://cbeci.org">CBECI</a> </li>
                          <li>NYC Subway Energy Consumption: <a href="https://www.nycsubway.org/wiki/Subway_FAQ:_Facts_and_Figures">NYC Subway Facts & Figures</a> </li>
                          <li>Flight Energy Consumption: <a href="https://www.withouthotair.com/c5/page_36.shtml">Without Air</a> </li>
                          <li>US Household Energy Consumption: <a href="https://www.eia.gov/tools/faqs/faq.php?id=97&t=3">EIA FAQs</a> </li>
                          <li>US Energy Consumption By Industry: <a href="https://www.eia.gov/consumption/manufacturing/data/2018/#r13">EIA Manufacturing Data</a> </li>
                          <li>Bitcoin vs Visa Energy Consumption: <a href="https://www.statista.com/statistics/881541/bitcoin-energy-consumption-transaction-comparison-visa/ ">Statista Dataset</a> Normalized To Per Microtransaction Applying Max Transactions Per Block</li>
                          <li>Max Transactions Per Block: <a href="https://towardsdatascience.com/the-blockchain-scalability-problem-the-race-for-visa-like-transaction-speed-5cce48f9d44">The Blockchain Scalability Problem</a> </li>
                          <li>Qin, Shize, et al. "Bitcoin's future carbon footprint." arXiv preprint arXiv:2011.02612 (2020). <a href="https://arxiv.org/pdf/2011.02612.pdf">https://arxiv.org/pdf/2011.02612.pdf</a></li>
                          <li>Renewable Energy Projections: <a href="https://ourworldindata.org/grapher/modern-renewable-energy-consumption?country=~OWID_WRL">Our World In Data Dataset</a> Extrapolated Using 5 Year Moving Average </li>
                          <li>Gallersdörfer U, Klaaßen L, Stoll C. Energy Consumption of Cryptocurrencies Beyond Bitcoin. Joule. 2020;4(9):1843-1846. doi:10.1016/j.joule.2020.07.013</li>
                          <li>VIREN TODO: Crypto Canadian Tax</li>
                        </ol>
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