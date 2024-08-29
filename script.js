const DEXSCREENER_URI = 'https://www.dexscreener.com/';
const GECKOTERMINAL_URI = 'https://www.geckoterminal.com/';
const DEXSCREENER_API_URI = 'https://api.dexscreener.com/latest/dex/pairs';
const GECKOTERMINAL_API_URI = 'https://api.geckoterminal.com/api/v2';
const GATEWAY_API_URI = 'https://gateway.blockchain.diggercapital.eu';

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
      }
    },
    "gnosis": {
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
    "gnosis": {
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
};

async function getDexscreenerPoolData(chainName, poolAddress) {
  const response = await fetch(`${DEXSCREENER_API_URI}/${chainName}/${poolAddress}`);
  const jsonData = await response.json();

  return {
    price: Number(jsonData.pair.priceNative),
    liquidity: Number(jsonData.pair.liquidity.usd)
  }
}

async function getGeckoterminalPoolData(chainName, poolAddress) {
  let priceNative = 0;

  switch (chainName) {
    case 'ethereum':
      chainName = 'eth';
      break;
    case 'manta':
      chainName = 'manta-pacific';
      break;
    case 'gnosis':
      chainName = 'xdai';
      break;
  }

  const URI = `${GECKOTERMINAL_API_URI}/networks/${chainName}/pools/${poolAddress}`;
  const response = await fetch(URI);
  const jsonData = await response.json();
  const attributes = jsonData.data.attributes;

  if (attributes.name.includes("USD")) {
    priceNative = attributes.base_token_price_usd;
  } else {
    priceNative = attributes.base_token_price_native_currency;
    if (priceNative > 2) {
      priceNative = attributes.base_token_price_quote_token;
      if (priceNative > 2 || priceNative < 1) {
        // priceNative = attributes.base_token_price_usd / attributes.quote_token_price_native_currency;
        priceNative = attributes.base_token_price_usd / attributes.quote_token_price_usd;
      }
    }
  }

  return {
    price: Number(priceNative),
    liquidity: Number(attributes.reserve_in_usd)
  }
}

function populateTokenSelect() {
    const select = document.getElementById('tokenSelect');
    Object.keys(POOL_CONFIG).forEach(token => {
        const option = document.createElement('option');
        option.value = token;
        option.textContent = token;
        select.appendChild(option);
    });
}

async function getPoolPrices(token) {
  const results = [];
  const chains = POOL_CONFIG[token];
  let originalPrice = 0;

  if (token === 'wstETH') {
    try {
      const response = await fetch(`${GATEWAY_API_URI}?network=ethereum&function=getLidoRedeemPrice`);
      originalPrice = await response.json();
    } catch (error) {
      console.error('Error fetching redeem price:', error);
    }

    console.log('lidoRedeemPrice', stockRedeemPrice);
  } else if (token === 'rETH') {
    try {
      const response = await fetch(`${GATEWAY_API_URI}?network=ethereum&function=getRocketpoolRedeemPrice`);
      originalPrice = await response.json();
    } catch (error) {
      console.error('Error fetching redeem price:', error);
    }

    console.log('lidoRedeemPrice', stockRedeemPrice);
  } else if (token === 'weETH') {
    originalPrice = 1;
  }

  // Add redeem price
  results.push({
    chain: 'ethereum',
    protocol: 'redeem',
    address: '',
    dexScreenerPrice: originalPrice.toFixed(5),
    dexScreenerDiff: '',
    dexScreenerLiquidity: '',
    geckoTerminalPrice:  '',
    geckoTerminalDiff: '',
    geckoTerminalLiquidity: '',
    dexScreenerLink: '',
    geckoTerminalLink: ''
  });

  for (const [chainName, protocols] of Object.entries(chains)) {
    for (const [protocolName, poolInfo] of Object.entries(protocols)) {
      let dexScreenerPrice = 0;
      let geckoTerminalPrice = 0;
      let dexScreenerLiquidity = 0;
      let geckoTerminalLiquidity = 0;
      const address = poolInfo.address;
      
      // Dexscreener price
      try {
        const dexscreenerData = await getDexscreenerPoolData(chainName, address);
        dexScreenerPrice = dexscreenerData.price;
        dexScreenerLiquidity = dexscreenerData.liquidity;
      } catch (error) {
        dexScreenerPrice = '';
        console.error(`[DexScreener] Error fetching prices for ${chainName} - ${protocolName}:`, error);
      }
      // GeckoTerminal price
      try {
        const geckoterminalData = await getGeckoterminalPoolData(chainName, address);
        geckoTerminalPrice = geckoterminalData.price;
        geckoTerminalLiquidity = geckoterminalData.liquidity;
      } catch (error) {
        geckoTerminalPrice = '';
        console.error(`[GeckoTerminal] Error fetching prices for ${chainName} - ${protocolName}:`, error);
      }

      // Set original price
      if (chainName === 'ethereum' && protocolName === 'Uniswap' && originalPrice === 0) {
        originalPrice = dexScreenerPrice;
      }

      results.push({
        chain: chainName,
        protocol: protocolName,
        address: address,
        dexScreenerPrice: dexScreenerPrice ? dexScreenerPrice.toFixed(5) : '',
        dexScreenerDiff: dexScreenerPrice ? ((originalPrice - dexScreenerPrice) / originalPrice * 100).toFixed(3) : '',
        dexScreenerLiquidity: dexScreenerLiquidity,
        geckoTerminalPrice: geckoTerminalPrice ? geckoTerminalPrice.toFixed(5) : '',
        geckoTerminalDiff: geckoTerminalPrice ? ((originalPrice - geckoTerminalPrice) / originalPrice * 100).toFixed(3) : '',
        geckoTerminalLiquidity: geckoTerminalLiquidity,
        dexScreenerLink: `${DEXSCREENER_URI}/${chainName}/${address}`,
        geckoTerminalLink: `${GECKOTERMINAL_URI}/${chainName}/pools/${address}`
      });
    }
  }
  return results;
}

function getColorForDiff(diff) {
  if (diff === '') return '';
  const absValue = Math.abs(parseFloat(diff));
  const intensity = Math.min(absValue * 1.5, 100);
  return `background-color: rgba(255, 0, 0, ${intensity})`;
}

function formatLiquidity(liquidity) {
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
              <th>Dexscreener link</th>
              <th>Geckoterminal link</th>
          </tr>
  `;
    
  results.forEach(result => {
    const dexScreenerDiff = result.dexScreenerPrice === '0.00000' ? '' : `${result.dexScreenerDiff}`;
    const geckoTerminalDiff = result.geckoTerminalPrice === '0.00000' ? '' : `${result.geckoTerminalDiff}`;
    
    html += `<tr>
      <td>${result.chain}</td>
      <td>${result.protocol}</td>
      <td>${result.dexScreenerPrice}</td>
      <td style="${getColorForDiff(dexScreenerDiff)}">${dexScreenerDiff} %</td>
      <td>${formatLiquidity(result.dexScreenerLiquidity)}</td>
      <td>${result.geckoTerminalPrice}</td>
      <td style="${getColorForDiff(geckoTerminalDiff)}">${geckoTerminalDiff} %</td>
      <td>${formatLiquidity(result.geckoTerminalLiquidity)}</td>
      <td>${result.address}</td>
      <td><a href="${result.dexScreenerLink}" target="_blank">Dexscreener link</td>
      <td><a href="${result.geckoTerminalLink}" target="_blank">GeckoTerminal link</td>
    </tr>`;
  });
  
  html += '</table>';
  resultDiv.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
    populateTokenSelect();
    document.getElementById('tokenSelect').addEventListener('change', async (event) => {
        const token = event.target.value;
        if (token) {
            const results = await getPoolPrices(token);
            displayResults(token, results);
        } else {
            document.getElementById('result').innerHTML = '';
        }
    });
});