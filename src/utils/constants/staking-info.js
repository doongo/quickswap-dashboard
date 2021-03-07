import {
  EASY,
  USDC,
  ETHER,
  UNITOKEN,
  QUICK,
  DAI,
  WBTC,
  MATIC,
  OM,
  GHST,
  MAUSDC,
  MAAAVE,
  SX,
  MALINK,
  MAUNI,
  MAYFI,
  MAUSDT,
  MATUSD,
  MADAI,
  MAWETH,
  SWAP,
  DB,
  GAME,
  HEX,
  MRBAL,
  ZUT,
  FRAX,
  IFARM,
  VISION,
  PPDEX,
  MUST,
  DG,
  UBT,
  FXS,
  CEL,
  ARIA20,
  CFI,
  DSLA,
  DRC,
  LINK
} from './constants';

const STAKING_INFO = [//TODO: MATIC
  {
    tokens: [MAUSDC, USDC],
    stakingRewardAddress: '0x111C8Fb82c3BAf533ca7A0deeB5a7BF31D6B2b57',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [QUICK, GHST],
    stakingRewardAddress: '0x0A1d12b089577870FE94176Cc6fb2B87A94f268C',
    ended: false,
    name: 'StkGHST-QUICK',
    lp: '0xA02d547512Bb90002807499F05495Fe9C4C3943f'
  },
  {
    tokens: [ETHER, USDC],
    stakingRewardAddress: '0x4571948F99Af3c39ac9831874E413E907981a341',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MATIC, QUICK],
    stakingRewardAddress: '0x6376Fd1ee8d76096a5Ba7A54D9E0Dea9B6c89C20',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [FRAX, FXS],
    stakingRewardAddress: '0x71Fe8138C81d7a0cd7e463c8C7Ff524085A411ab',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [WBTC, ETHER],
    stakingRewardAddress: '0xdD7538d82E7A38A07A09E96c15279CE74cC14ABC',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ETHER, MATIC],
    stakingRewardAddress: '0x88963CC8DF67208DdD7FF78A093fB2F9242d9e00',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [CEL, ETHER],
    stakingRewardAddress: '0xdeeFB589f8dd66b9A4FbCaff589028f6DE9D4C73',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [QUICK, CEL],
    stakingRewardAddress: '0x6dED557bd6E2bcD2653bA0B43d0e0f1B2D3Dbd99',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [GHST, USDC],
    stakingRewardAddress: '0xF235f75ea0F053037F5de99778aefae9c6AB9C84',
    ended: false,
    name: 'stkGHST-USDC',
    lp: '0x04439eC4ba8b09acfae0E9b5D75A82cC63b19f09'
  },
  {
    tokens: [FRAX, QUICK],
    stakingRewardAddress: '0x536D4757dfA353a4Db2B821cF1adD3A76cc0E63b',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DAI, ETHER],
    stakingRewardAddress: '0x1732a459fba48ab2E5fEA9d3932906E2FF7cAA99',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAAAVE, QUICK],
    stakingRewardAddress: '0xF0756eB4106b82c4CBd82Db266313a58A5E5844E',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ETHER, QUICK],
    stakingRewardAddress: '0xAEB63c546Be3d6b4f1390e59A07933bc9abB3839',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [SWAP, ETHER],
    stakingRewardAddress: '0x4c44AF5349e651cb886Fb0dc3D3668a179733762',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [USDC, QUICK],
    stakingRewardAddress: '0x8cf4f5b9A2d87F176ED23272aE9DcE4959f7C8FF',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [LINK, ETHER],
    stakingRewardAddress: '0xA0dC0D47C064b228a56cE3ee821408AE74473e2a',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [LINK, QUICK],
    stakingRewardAddress: '0x1c26fa3280814aFD43Fe55cB94e842Ce38070060',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [SWAP, QUICK],
    stakingRewardAddress: '0xB0955Ed458cd03Ff2d46903020de4549C72E3995',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [SX, ETHER],
    stakingRewardAddress: '0x4Ee7A892E887902248bbE6D10dad20C6edB603b4',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MATIC, USDC],
    stakingRewardAddress: '0x682e7eac9A54c1d50DbFCE15a0e48Ee04d8b4EE7',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [IFARM, MATIC],
    stakingRewardAddress: '0xA61d3F278E01bF427ebd180C5cb316DB7156d3DF',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MATUSD, MAUSDC],
    stakingRewardAddress: '0x6a0E0Cfae54D0e8e713367F3da0D1E95C385a130',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAUSDT, MAUSDC],
    stakingRewardAddress: '0x94E34803393882eF97D8254d6682ab03fC407ED3',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [IFARM, QUICK],
    stakingRewardAddress: '0xbd3FAB81C05D6BC92F85059B93f62E6031fBb39c',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MADAI, MAUSDC],
    stakingRewardAddress: '0xD454425F85C1CEfFACd91172312F6704A6b158F5',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAYFI, MAUSDC],
    stakingRewardAddress: '0x5DD8BE8E5b43b4db266d3d7b911a8241d6610BBf',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [UBT, ETHER],
    stakingRewardAddress: '0x048B32F30C115F033D0aAf869351e872F21A7cab',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DB, MATIC],
    stakingRewardAddress: '0x152f15A8128D8De734932CA7986F97321006f0Ad',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [QUICK, OM],
    stakingRewardAddress: '0xb160BF8878123AE85b3DB6dCE37B5F848ec9cf0f',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ETHER, OM],
    stakingRewardAddress: '0x5356c27664C5e23513a9419E272576a5d2E6832e',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAWETH, MAUSDC],
    stakingRewardAddress: '0x3c6C4F00a1c7525D229046512E03d1474B27E7C7',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAAAVE, MAUSDC],
    stakingRewardAddress: '0xA2C4BE3F83DEACb1e60a62675Aef314a2cB3D05E',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [UNITOKEN, QUICK],
    stakingRewardAddress: '0xCB26D1DFa93F0506Fded0F3C799D46784B65Abd5',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MALINK, MAUSDC],
    stakingRewardAddress: '0x453f7e2Ae4a7829Aeb7F95CAe18CE083e38fd78F',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAUNI, MAUSDC],
    stakingRewardAddress: '0xCeBe4F02454DF590532f3980e0fcF076BE6e3301',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DG, ETHER],
    stakingRewardAddress: '0xBcf91097e3585B8B201E642C5429cc0caa453C3b',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DG, QUICK],
    stakingRewardAddress: '0xA4FF67A10f7250e9Ce5468f267a72e1E200c0F82',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [UBT, QUICK],
    stakingRewardAddress: '0xB169F29E98Db049ccD9118bf3eF17BB1B576fEF5',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DB, ETHER],
    stakingRewardAddress: '0x74D7E554abc97f0700E79bfB1a12a72DbdE7414B',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [HEX, ETHER],
    stakingRewardAddress: '0x790faEbd419e68F862fc2AC178530e5993150136',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [HEX, QUICK],
    stakingRewardAddress: '0xbeB94A09E8ea0bCaBdF45Dc35c063be5eFa8098A',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAUSDC, QUICK],
    stakingRewardAddress: '0xAA0505C616070aDBB5849Cd2e69001D790F83C23',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [EASY, QUICK],
    stakingRewardAddress: '0x2F5240381Aaf4bd933497d237441FdcA29c547b5',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [SX, QUICK],
    stakingRewardAddress: '0x6E2c6Ec20B1D37C68d55853F041E26C7085F0609',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [GAME, QUICK],
    stakingRewardAddress: '0x5d5E93dAf02503838839cC2Efc469dDF09f9970B',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [GAME, ETHER],
    stakingRewardAddress: '0x8a2c0E8668CEA0ed4E4F7f8054CCf2B596dB6593',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ARIA20, ETHER],
    stakingRewardAddress: '0x4BaCe30A7d51fC6143B76630F0d4dDe9A84aD026',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [SX, DAI],
    stakingRewardAddress: '0xd730DA4945Ed2cAb4859F5Ff5120563F89F4d946',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ARIA20, QUICK],
    stakingRewardAddress: '0xf993e7aB870414b975c0c86fEBc485Ac55Ca4ce2',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ZUT, QUICK],
    stakingRewardAddress: '0xe71Ee2AEd6ac7F0f79a39e8eabC661A8a81d9445',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MRBAL, QUICK],
    stakingRewardAddress: '0xED4632e6e62F0B21Da5FcCc73219F90679180a10',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [VISION, ETHER],
    stakingRewardAddress: '0x5688d4a096EaaC58A4E97cDAf47148156aEa894d',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MUST, MATIC],
    stakingRewardAddress: '0xF1c11f2db9a79674D37A2B5143bA75C3C37B4b24',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MUST, QUICK],
    stakingRewardAddress: '0x3EFF4110dE6BB8fa02a13a13811c4A0b951e5868',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [VISION, QUICK],
    stakingRewardAddress: '0x443991561B978B910b2A712e747Bf73B62F59Fd7',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [CFI, USDC],
    stakingRewardAddress: '0x79Dc8AC9a0062D283F2EA755cB8671a76c1F4289',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [CFI, QUICK],
    stakingRewardAddress: '0xECc943eB73877450F43142265fB4EfFc102988C2',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [PPDEX, QUICK],
    stakingRewardAddress: '0xCaAF5CC13cb23988028a95c9162FCf11B5524D36',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DSLA, QUICK],
    stakingRewardAddress: '0x67a7CC86D3Cf578b1a4AC37dC503F0d1093d45Fa',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DSLA, ETHER],
    stakingRewardAddress: '0xa9B2852263a7e32B5D90f43380c21e367e350472',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DRC, QUICK],
    stakingRewardAddress: '0x0684311298C4F705517098c142f095bc0d810e37',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DRC, USDC],
    stakingRewardAddress: '0x98c700BC3F366Bc1b7759a8149c94dDE0edC0536',
    ended: false,
    lp: '',
    name: ''
  }

]

export const STAKING_INFO_ACTIVE = STAKING_INFO.filter(p => !p.ended);