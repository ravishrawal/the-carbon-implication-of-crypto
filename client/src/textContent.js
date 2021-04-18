// ADD YOUR TEXT HERE

const scrollyContent = [
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
                        <div className='term-div'>
                          <p className='term-content' style={{color:'white'}}> 
                          Bitcoin was the first cryptocurrency to enter the market in 2009.<br /><br />
                          
                          Although it was slow to gain traction, its trading volume boomed in 2017
                          and again in 2020. 
                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content' style={{color:'white'}}> 
                          Its price also boomed in 2017 and 2020.<br /><br />
                          The 2017 peak is eclipsed by the price surge that began in 2020.<br /><br />
                          Bitcoin is currently the largest cryptocurrency by market capitalization.
                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content' style={{color:'white'}}> 
                          Look at the amount of energy the Bitcoin Network consumes compared to: <br/>
                          <ul>
                           <li>flights from NYC to LA,</li>
                           <li>american households for a year,</li>
                           <li> the NYC subway system for a year, and ... </li>
                          </ul>
                        </p>
                      </div>,                      
                      <div className='term-div'>
                          <p className='term-content' style={{color:'white'}}> 
                          <ul>
                          <li> other polluting industries such as petroleum, plastics, dairy, and beverages</li>
                          </ul>
                        </p>
                      </div>,
                      <div className='term-div'>
                          <p className='term-content' style={{color:'white'}}> 
                          Even the energy consumed per transaction for Bitcoin eclipses that of VISA.
                        </p>
                      </div>,
                      'But why does bitcoin consume an enormous amount of energy? To add valid transactions to the ledger, volunteers have to find a solution to a computationally intensive puzzle based on a ‘hash function’ called SHA-256.',
                      'However is more energy being consumed inherently bad for the environment?  Supporters argue that as long as the mining farms use renewable energy, energy consumption is not an issue. However this argument has two flaws: Increase in renewable energy production will not be able to keep up with energy needed to maintain the network. And using the limited supply of renewable energy for mining will only allow Bitcoin miners to go green while forcing other industries to use fossil fuels ',
                      <div className='term-div'>
                        <h5>So What Can We Do?</h5>
                        <p className='term-header'>Move away from Proof of Work (PoW) to Proof of Stake (PoS) Algorithms</p>
                        <p className='term-content'>
                          PoW algorithms only allow users to add transactions to the ledger if they have given a proof of computational ‘work’ completed. PoS algorithms work for systems where blocks are not ‘mined’ by solving a puzzle, but validated by validators that are selected by the network
                        </p>
                      </div>,
                      <div className='term-div'>
                        <p className='term-header'>Apply lower bounds on consensus algorithm efficiency</p>
                        <p className='term-content'>
                          Bitcoin consumes an immense amount of energy, but only makes up 80% of the market cap and is actually more energy efficient than a lot of its counterparts. This is because it uses a SHA-256 hash algorithm, which cryptocurrencies like Monero and Dogecoin do not support, rendering them magnitudes more energy intensive.
                        </p>
                      </div>,
                      <div className='term-div'>
                        <p className='term-header'>Regulate Mining Farms</p>
                        <p className='term-content'>
                          Some experts suggest levying a Carbon Tax on mining activity. Some authorities, like those in Quebec, Canada have increased the cost of electricity for miners
                        </p>
                      </div>,
                    ]


const sectionContent = [
                    `A cryptocurrency is a digital currency that is not managed by governments or banks 
                    and is not tied to fiat currencies or other physical assets. 

                    It is based on publicly available ledger with a history of all the transactions.

                    Since no central system controls its value, and anyone can contribute to maintain the 
                    currency, it is eulogized for democratizing money.`,
                    `Bitcoin has an enormous energy footprint.`
                    ]


export  { scrollyContent as scrollyContent}
export {sectionContent}