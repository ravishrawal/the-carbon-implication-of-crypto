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
                          <p className='term-content'style={{color:colors.cryptolightgreen}}> 
                          Yearly, Bitcoin consumes as much energy as 6.4 million U.S. households...
                        </p>
                      </div>,                      
                      <div className='term-div'>
                          <p className='term-content' style={{color:colors.cryptolightgreen}}> 
                          and about as much as the entire U.S. plastics industry.
                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content' style={{color:colors.cryptolightgreen}}> 
                          When we discuss accepting payment in the form of Bitcoin, we should carefully consider the environmental impact.
                          <br/>TODO: Add how we calculated the per transaction energy.
                        </p>
                      </div>,
                      'But why does bitcoin consume an enormous amount of energy? To add valid transactions to the ledger, volunteers have to find a solution to a computationally intensive puzzle based on a ‘hash function’ called SHA-256.',
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
                      'TODO:HASH TEXT',
                      <div className='term-div'>
                          <p className='term-content' style={{color:colors.cryptoblack}}> 
                          Consuming more energy isn't inherently bad. <br/><br/>
                          But based on the growth rate of renewable adoption 
                          in the last decade compared to that of Bitcoin,
                          the carbon implication is exponential.
                        </p>
                      </div>,
                      <div className='term-div'>
                        <p className='term-content term-subheading'>
                          Move away from Proof of Work (PoW) to Proof of Stake (PoS) Algorithms
                        </p>
                        <br/>
                        <p className='term-content'>
                          PoW algorithms only allow users to add transactions to the ledger if they
                          have given a proof of computational ‘work’ completed. PoS algorithms work
                          for systems where blocks are not ‘mined’ by solving a puzzle, but validated
                          by validators that are selected by the network
                        </p>
                      </div>,
                      <div className='term-div'>
                        <p className='term-content term-subheading'>
                          Apply lower bounds on consensus algorithm efficiency
                        </p>
                        <br/>
                        <p className='term-content'>
                          Bitcoin consumes an immense amount of energy, but only 
                          makes up 80% of the market cap and is actually more energy 
                          efficient than a lot of its counterparts. This is because it 
                          uses a SHA-256 hash algorithm, which cryptocurrencies like Monero 
                          and Dogecoin do not support, rendering them magnitudes more 
                          energy intensive.
                        </p>
                      </div>,
                      <div className='term-div'>
                        <p className='term-content term-subheading'>
                          Regulate Mining Farms
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
                     all the way to the moon.
                     </p>,
                     
                     <p className='sectionText'>
                          All signs show that bitcoin is moving towards upholding the vision of its 
                          early adoptors by becoming the foundation a functioning decentralized financial system. <br/> <br/>
                          But is it a technology we can sustain in the long run? <br/> <br/>
                          Let's gain some perspective on the massive amount of energy consumed by Bitcoin. 
                      </p>,
                      <p className='sectionText'>
                          But what exactly is Bitcoin and 
                          what about it makes it guzzle all that energy? <br/><br/>
                          Let's understand how cryptocurrencies work so we can better understand how we can make Bitcoin sustainable. 
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