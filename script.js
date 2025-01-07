const DEXSCREENER_URI = 'https://www.dexscreener.com/';
const GECKOTERMINAL_URI = 'https://www.geckoterminal.com/';
const DEXSCREENER_API_URI = 'https://api.dexscreener.com/latest/dex/pairs';
const GECKOTERMINAL_API_URI = 'https://api.geckoterminal.com/api/v2';
const GATEWAY_API_URI = 'https://gateway.blockchain.diggercapital.eu';
const GATEWAY_ENDPOINT = '?function=getRedeemPrice&token=';
const DEXSCREENER_IMG_URI = 'https://dd.dexscreener.com/ds-data/chains/';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes en millisecondes
const priceCache = new Map();

const POOL_CONFIG = {
  "wstETH": {
    "ethereum": {
      "Uniswap": {
        "address": "0x109830a1aaad605bbf02a9dfa7b0b92ec2fb7daa"
      },
    },
    "base": {
      "Uniswap": {
        "address": "0x20e068d76f9e90b90604500b84c7e19dcb923e7e"
      },
      "Aerodrome": {
        "address": "0x861a2922be165a5bd41b1e482b49216b465e1b5f"
      }
    },
    "arbitrum": {
      "Uniswap": {
        "address": "0x35218a1cbac5bbc3e57fd9bd38219d37571b3537"
      },
      "Camelot": {
        "address": "0xdeb89de4bb6ecf5bfed581eb049308b52d9b2da7"
      }
    },
    "optimism": {
      "Uniswap": {
        "address": "0x04f6c85a1b00f6d9b75f91fd23835974cc07e65c"
      },
      "Velodrome": {
        "address": "0xbf30ff33cf9c6b0c48702ff17891293b002dfea4"
      }
    },
    "bsc": {
      "PancakeSwap": {
        "address": "0x6cb5392b9ca52d7a0e6940e82d29087361360ec3"
      }
    },
    "gnosischain": {
      "Balancer": {
        "address": "0xbad20c15a773bf03ab973302f61fabcea5101f0a"
      }
    },
    "manta": {
      "Uniswap": {
        "address": "0x578ef5f3a3D34949A590aE7719E5Bd69a3720865"
      }
    },
  },
  "weETH": {
    "ethereum": {
      "Uniswap": {
        "address": "0x202a6012894ae5c288ea824cbc8a9bfb26a49b93"
      },
    },
    "arbitrum": {
      "Camelot": {
        "address": "0x293dfd996d5cd72bed712b0eeab96dbe400c0416"
      },
      "Ramses": {
        "address": "0x2d4bfb17db454cf582a74902c91fb09a3883a5cc"
      },
      "Uniswap": {
        "address": "0xa169d1ab5c948555954d38700a6cdaa7a4e0c3a0"
      }
    },
    "base": {
      "Uniswap": {
        "address": "0xb1419a7f9e8c6e434b1d05377e0dbc4154e3de78"
      }
    },
    "optimism": {
      "Uniswap": {
        "address": "0xef7aad9ce20625e5883933473dd49a60231426c0"
      }
    },
  },
  "cbETH": {
    "ethereum": {
      "Uniswap": {
        "address": "0x177622e79acece98c39f6e12fa78ac7fc8a8bf62"
      },
    },
    "base": {
      "Uniswap": {
        "address": "0x10648ba41b8565907cfa1496765fa4d95390aa0d"
      },
      "Aerodrome": {
        "address": "0x47ca96ea59c13f72745928887f84c9f52c3d7348"
      }
    },
    "arbitrum": {
      "Uniswap": {
        "address": "0xed3fe08bd12f24dad0f1a1e58610644debe374fb"
      },
    },
    "optimism": {
      "Velodrome": {
        "address": "0x68387b6647742b11486e65078b39716469572962"
      }
    },
  },
  "rETH": {
    "ethereum": {
      "Uniswap": {
        "address": "0x553e9C493678d8606d6a5ba284643dB2110Df823"
      },
      "Balancer": {
        "address": "0x1e19cf2d73a72ef1332c882f20534b6519be0276"
      }
    },
    "arbitrum": {
      "Uniswap": {
        "address": "0x09ba302a3f5ad2bf8853266e271b005a5b3716fe"
      },
      "Pancakeswap": {
        "address": "0xc75908421566ea77a73b14d9cd0479c568f2b7a7"
      }
    },
    "optimism": {
      "Beethoven": {
        "address": "0x4fd63966879300cafafbb35d157dc5229278ed23"
      },
      "Velodrome": {
        "address": "0x985612ff2c9409174fedcff23d4f4761af124f88"
      }
    },
    "gnosischain": {
      "Balancer": {
        "address": "0x71e1179c5e197fa551beec85ca2ef8693c61b85b"
      }
    },
  },
  "sfrxETH": {
    "fraxtal": {
      "RA": {
        "address": "0x52a3a6961da9f9567d22f6c0d6e2521175b4c39c"
      },
    },
  },
  "USDT": {
    "ethereum": {
      "Uniswap": {
        "address": "0x3416cf6c708da44db2624d63ea0aaef7113527c6"
      },
    },
    "arbitrum": {
      "Uniswap": {
        "address": "0xbe3ad6a5669dc0b8b12febc03608860c31e2eef6"
      },
    },
    "base": {
      "Uniswap": {
        "address": "0xd56da2b74ba826f19015e6b7dd9dae1903e85da1"
      },
    },
    "manta": {
      "Uniswap": {
        "address": "0x060f2babc09826687be9cbf5c7ede3b3cd00dd78"
      },
    },
  },
  "UNI": {
    "ethereum": {
      "Uniswap": {
        "address": "0xd0fc8ba7e267f2bc56044a7715a489d851dc6d78"
      },
    },
    "arbitrum": {
      "Uniswap": {
        "address": "0xd97c8ee1c1e47f50a66e69d5ad155f882e38b0e5"
      },
    },
    "base": {
      "Uniswap": {
        "address": "0x35d84ae687f0d3bf8548d5470fd04d2abe74f074"
      }
    },
  },
  "rsETH": {
    "arbitrum": {
      "Uniswap": {
        "address": "0x48b0ab72c2591849e678e7d6f272b75ef9b863f7"
      },
      "Ramses": {
        "address": "0x2f804c07f0e7637520ed72af22e486da6a82613e"
      },
      "Camelot": {
        "address": "0xb355cce5cbaf411bd56e3b092f5aa10a894083ae"
      },
      "Pancakeswap": {
        "address": "0x4b89179dafe5c36ae611208b5590fef9153b7daa"
      },
    },
    "optimism": {
      "BeethovenX": {
        "address": "0x73a7fe27fe9545d53924e529acf11f3073841b9e"
      },
      "Velodrome": {
        "address": "0xe48b4e392e4fc29ac2600c3c8efe0404a15d60d9"
      },
    },
    "base": {
      "Aerodrome": {
        "address": "0xa24382874a6fd59de45bbccfa160488647514c28"
      },
    }
  },
  "ezETH": {
    "ethereum": {
      "Balancer": {
        "address": "0x596192bb6e41802428ac943d2f1476c1af25cc0e"
      },

    },
    "arbitrum": {
      "Uniswap": {
        "address": "0x1f0a76ae19f4b8b79e36886c71a989cd723365dc"
      },
      "Ramses": {
        "address": "0x575f1691e6391a2fcf932f9b9dfd6dbfb4792c13"
      },
      "Camelot": {
        "address": "0xaa45265a94c93802be9511e426933239117e658f"
      },
      "TraderJoe": {
        "address": "0x8c0635ad0afd7aa9444af07da6c104dd79b58d82"
      },
    },
    "base": {
      "Uniswap": {
        "address": "0x58603091b4da10685e114d85e330cab36e655627"
      },
      "Aerodrome": {
        "address": "0xdc7ead706795eda3feda08ad519d9452badf2c0d"
      },
      "Aerodrome": {
        "address": "0x497139e8435e01555ac1e3740fccab7aff149e02"
      },
    },
  },
  //0x8c9532a60E0E7C6BbD2B2c1303F63aCE1c3E9811
  // "pzETH": {
  // },
};

function getCacheKey(type, chainName, poolAddress) {
  return `${type}-${chainName}-${poolAddress}`;
}

async function getDexscreenerPoolData(chainName, poolAddress) {
  const cacheKey = getCacheKey('dexscreener', chainName, poolAddress);
  
  // Vérifier le cache
  const cachedData = priceCache.get(cacheKey);
  if (cachedData && (Date.now() - cachedData.timestamp) < CACHE_DURATION) {
    return cachedData.data;
  }

  try {
    const response = await fetch(`${DEXSCREENER_API_URI}/${chainName}/${poolAddress}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const jsonData = await response.json();

    const data = {
      price: Number(jsonData.pair?.priceNative) || 0,
      liquidity: Number(jsonData.pair?.liquidity?.usd) || 0
    };

    // Mettre en cache
    priceCache.set(cacheKey, {
      timestamp: Date.now(),
      data: data
    });

    return data;
  } catch (error) {
    console.error(`[DexScreener] Error for ${chainName}/${poolAddress}:`, error);
    return { price: 0, liquidity: 0 };
  }
}

function calculateGeckoPrice(attributes) {
  let priceNative;
  
  if (attributes.name.includes("USD")) {
    priceNative = attributes.base_token_price_usd;
  } else {
    priceNative = attributes.base_token_price_native_currency;
    
    if (priceNative > 2) {
      priceNative = attributes.base_token_price_quote_token;
      
      if (priceNative > 2 || priceNative < 1) {
        priceNative = attributes.base_token_price_usd / attributes.quote_token_price_usd;
      }
    }
  }
  
  return priceNative;
}

async function getGeckoterminalPoolData(chainName, poolAddress) {
  const cacheKey = getCacheKey('geckoterminal', chainName, poolAddress);
  
  // Vérifier le cache
  const cachedData = priceCache.get(cacheKey);
  if (cachedData && (Date.now() - cachedData.timestamp) < CACHE_DURATION) {
    return cachedData.data;
  }

  try {
    const adjustedChainName = {
      'ethereum': 'eth',
      'manta': 'manta-pacific',
      'gnosis': 'xdai'
    }[chainName] || chainName;

    const URI = `${GECKOTERMINAL_API_URI}/networks/${adjustedChainName}/pools/${poolAddress}`;
    const response = await fetch(URI);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const jsonData = await response.json();
    
    const attributes = jsonData.data?.attributes;
    if (!attributes) throw new Error('Invalid data structure');

    const priceNative = calculateGeckoPrice(attributes);

    const data = {
      price: Number(priceNative) || 0,
      liquidity: Number(attributes.reserve_in_usd) || 0
    };

    // Mettre en cache
    priceCache.set(cacheKey, {
      timestamp: Date.now(),
      data: data
    });

    return data;
  } catch (error) {
    console.error(`[GeckoTerminal] Error for ${chainName}/${poolAddress}:`, error);
    return { price: 0, liquidity: 0 };
  }
}

function createTokenCheckboxes() {
    const tokenCheckboxesDiv = document.getElementById('tokenCheckboxes');
    tokenCheckboxesDiv.style.display = 'flex';
    tokenCheckboxesDiv.style.alignItems = 'center';
    tokenCheckboxesDiv.style.gap = '10px';

    Object.keys(POOL_CONFIG).forEach(token => {
        const wrapper = document.createElement('div');
        wrapper.style.display = 'inline-flex';
        wrapper.style.alignItems = 'center';
        wrapper.style.marginRight = '10px';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `token-${token}`;
        checkbox.value = token;

        const label = document.createElement('label');
        label.htmlFor = `token-${token}`;
        label.textContent = token;
        label.style.marginLeft = '5px';

        wrapper.appendChild(checkbox);
        wrapper.appendChild(label);
        tokenCheckboxesDiv.appendChild(wrapper);
    });

    const validateButton = document.getElementById('validateButton');
    if (validateButton) {
        validateButton.style.marginLeft = '10px';
        tokenCheckboxesDiv.appendChild(validateButton);
    }
}

async function handleValidation() {
    const selectedTokens = Array.from(document.querySelectorAll('#tokenCheckboxes input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);

    if (selectedTokens.length === 0) {
        alert('Veuillez sélectionner au moins un token.');
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    for (const token of selectedTokens) {
        const results = await getPoolPrices(token);
        displayResults(token, results);
    }
}

async function getPoolPrices(token) {
  const results = [];
  const chains = POOL_CONFIG[token];
  const network = token === 'rsETH' ? 'optimism' : 'ethereum';
  
  // Récupérer le prix de rachat en premier si nécessaire
  let originalPrice = 0;
  if (['wstETH', 'rETH', 'weETH', 'rsETH', 'ezETH', 'cbETH'].includes(token)) {
    try {
      const uri = `${GATEWAY_API_URI}${GATEWAY_ENDPOINT}${token}&network=${network}`;
      const response = await fetch(uri);
      originalPrice = await response.json();
      
      results.push({
        chain: network,
        protocol: 'redeem',
        address: '',
        dexScreenerPrice: originalPrice.toFixed(5),
        dexScreenerDiff: '',
        dexScreenerLiquidity: '',
        geckoTerminalPrice: '',
        geckoTerminalDiff: '',
        geckoTerminalLiquidity: '',
        dexScreenerLink: '',
        geckoTerminalLink: ''
      });
    } catch (error) {
      console.error('Error fetching redeem price:', error);
    }
  }

  // Préparer tous les appels API en parallèle
  const apiCalls = [];
  for (const [chainName, protocols] of Object.entries(chains)) {
    for (const [protocolName, poolInfo] of Object.entries(protocols)) {
      const address = poolInfo.address;
      apiCalls.push(
        Promise.all([
          getDexscreenerPoolData(chainName, address),
          getGeckoterminalPoolData(chainName, address)
        ]).then(([dexData, geckoData]) => ({
          chainName,
          protocolName,
          address,
          dexData,
          geckoData
        }))
      );
    }
  }

  // Exécuter tous les appels en parallèle
  const apiResults = await Promise.allSettled(apiCalls);

  // Traiter les résultats
  apiResults.forEach(result => {
    if (result.status === 'fulfilled') {
      const { chainName, protocolName, address, dexData, geckoData } = result.value;
      
      if (chainName === 'ethereum' && protocolName === 'Uniswap' && originalPrice === 0) {
        originalPrice = dexData.price;
      }

      results.push({
        chain: chainName,
        protocol: protocolName,
        address: address,
        dexScreenerPrice: dexData.price ? dexData.price.toFixed(5) : '',
        dexScreenerDiff: dexData.price ? ((dexData.price - originalPrice) / originalPrice * 100).toFixed(3) : '',
        dexScreenerLiquidity: dexData.liquidity,
        geckoTerminalPrice: geckoData.price ? geckoData.price.toFixed(5) : '',
        geckoTerminalDiff: geckoData.price ? ((geckoData.price - originalPrice) / originalPrice * 100).toFixed(3) : '',
        geckoTerminalLiquidity: geckoData.liquidity,
        dexScreenerLink: `${DEXSCREENER_URI}/${chainName}/${address}`,
        geckoTerminalLink: `${GECKOTERMINAL_URI}/${chainName}/pools/${address}`
      });
    }
  });

  return results;
}

function getColorForDiff(diff) {
  if (diff === '') return '';
  const absValue = Math.abs(parseFloat(diff));
  const intensity = Math.min(absValue * 1.5, 100);
  return `background-color: rgba(255, 0, 0, ${intensity})`;
}

function formatLiquidity(liquidity) {
  if (liquidity === '' || liquidity === 0) return '';
  if (liquidity >= 1000000000) {
    return '/';
  } else if (liquidity >= 1000000) {
    return (liquidity / 1000000).toFixed(2) + 'M';
  } else if (liquidity >= 1000) {
    return (liquidity / 1000).toFixed(2) + 'k';
  } else {
    return liquidity.toFixed(2);
  }
}

function displayResults(token, results) {
  const resultDiv = document.getElementById('result');
  let html = `<h2>${token}</h2>`;
  html += `
      <table>
          <tr>
              <th>Chain</th>
              <th>Protocol</th>
              <th>DexScreener Price</th>
              <th>DexScreener Diff</th>
              <th>DexScreener Liquidity</th>
              <th>GeckoTerminal Price</th>
              <th>GeckoTerminal Diff</th>
              <th>GeckoTerminal Liquidity</th>
              <th>Contract address</th>
              <th>Dexscreener</th>
              <th>Geckoterminal</th>
          </tr>
  `;
    
  results.forEach(result => {
    const dexScreenerDiff = result.dexScreenerPrice === '0.00000' ? '' : `${result.dexScreenerDiff}`;
    const geckoTerminalDiff = result.geckoTerminalPrice === '0.00000' ? '' : `${result.geckoTerminalDiff}`;
    
    html += `<tr>
      <td style="text-align: center;"><img src="${DEXSCREENER_IMG_URI}${result.chain}.png" alt="${result.chain} logo" style="width: 25%;"></td>
      <td>${result.protocol}</td>
      <td>${result.dexScreenerPrice}</td>
      <td style="${getColorForDiff(dexScreenerDiff)}">${dexScreenerDiff} %</td>
      <td>${formatLiquidity(result.dexScreenerLiquidity)}</td>
      <td>${result.geckoTerminalPrice}</td>
      <td style="${getColorForDiff(geckoTerminalDiff)}">${geckoTerminalDiff} %</td>
      <td>${formatLiquidity(result.geckoTerminalLiquidity)}</td>
      <td>${result.address}</td>
      <td><a href="${result.dexScreenerLink}" target="_blank">Dexscreener</td>
      <td><a href="${result.geckoTerminalLink}" target="_blank">GeckoTerminal</td>
    </tr>`;
  });
  
  html += '</table>';
  resultDiv.innerHTML += html;
}

document.addEventListener('DOMContentLoaded', () => {
    createTokenCheckboxes();
    document.getElementById('validateButton').addEventListener('click', handleValidation);
});
