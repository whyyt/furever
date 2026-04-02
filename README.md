# 🐾 FurEver — 流浪动物链上生命护照协议

> 每一只动物从街头到家庭的旅程，都不应该因为任何一个平台的倒闭而消失。

**FurEver** 是一个基于 Avalanche 的流浪动物链上透明救助协议。我们用区块链解决现有救助平台的信任危机——让每笔善款可追溯、每只动物有不可篡改的生命护照、每一份救助记录永不消失。

---

## 💡 为什么做这个？

现有流浪动物救助平台（如街猫）已经验证了百万级的"云养猫"付费需求，但也暴露了中心化模式的致命问题：

- **资金不透明** — 用户付费后无法验证资金是否真的用在了动物身上
- **数据无法验证** — 救助数据缺乏独立验证机制，平台自报数据公信力不足
- **平台倒闭数据消失** — "寻它科技"2023年融资数千万做云领养，2024年倒闭，近千只猫的数据和资金全部消失

**FurEver 的答案：** 从"一台猫屋的模糊投喂"升级到"一只具体动物的精确陪伴"，用链上透明协议重建信任。

---

## 🔑 核心功能

### 📋 动物生命护照
每只被救助的动物都有一份不可篡改的链上档案——从被发现到康复到被领养，完整的生命旅程永久可查。

### ☁️ 一对一云领养
不是往猫屋里撒猫粮，而是云领养一只具体的动物。每月 29 元，每周收到它的近况，建立真正的情感连接。

### 🔗 链上透明
每笔捐款、每次救助记录都上链，任何人可以独立验证。资金去向不再靠平台"自说自话"，而是链上"自证清白"。

---

## 🗺️ 动物生命线

FurEver 围绕一条完整的"动物生命线"展开：

```
🏥 被救助 → ☁️ 云领养 → 🏠 真正领养 → 💉 健康管理 → 🛡️ 宠物信托
```

| 阶段 | 说明 | 状态 |
|------|------|------|
| 🏥 被救助 | 建立链上生命护照，记录救助经历 | ✅ Demo |
| ☁️ 云领养 | 一对一情感陪伴，月费订阅 | ✅ Demo |
| 🏠 真正领养 | NFT 领养证书，档案交接 | ✅ Demo |
| 💉 健康管理 | 宠物主人继续记录疫苗、体检 | 🔮 Phase 2 |
| 🛡️ 宠物信托 | 智能合约信托，终身保障 | 🔮 Phase 3 |

---

## 🏗️ 技术架构

| 层级 | 技术选型 | 说明 |
|------|----------|------|
| 链上层 | Avalanche C-Chain + Solidity | 低 Gas 费，每次存证仅需几分钱 |
| 前端 | React + TypeScript + Vite + Tailwind | 移动端优先 |
| 链交互 | ethers.js | 前端与合约交互 |
| 存储 | IPFS | 照片视频去中心化存储 |

### 智能合约

- **AnimalPassport.sol** — 动物档案存证合约（写入/读取档案哈希值）
- **DonationRecord.sol** — 捐赠记录合约（记录每笔资金来源、金额、目标动物）
- **AdoptionCertificate.sol** — NFT 领养证书合约（ERC-721）

合约部署在 Avalanche Fuji 测试网（Chain ID: 43113）

---

## 📂 项目结构

```
furever/
├── contracts/          # Solidity 智能合约
│   ├── AnimalPassport.sol
│   ├── DonationRecord.sol
│   └── AdoptionCertificate.sol
├── src/                # 前端源码
│   ├── pages/          # 页面组件
│   │   ├── HomePage.tsx        # 首页（产品介绍）
│   │   ├── AnimalArchive.tsx   # 动物档案页
│   │   ├── CloudAdopt.tsx      # 云领养页
│   │   └── DonationRecord.tsx  # 捐赠记录页
│   ├── components/     # 通用组件
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WalletConnect.tsx
│   └── App.tsx
├── public/             # 静态资源（动物照片等）
├── hardhat.config.ts   # Hardhat 配置
├── package.json
└── README.md
```

---

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- MetaMask 钱包（已添加 Avalanche Fuji 测试网）
- Avalanche Fuji 测试币（[领取地址](https://core.app/tools/testnet-faucet)）

### 安装运行

```bash
# 克隆项目
git clone https://github.com/[your-repo]/furever.git
cd furever

# 安装依赖
npm install

# 启动前端
npm run dev

# 部署合约（需要先配置 .env）
npx hardhat run scripts/deploy.ts --network fuji
```

### Avalanche Fuji 测试网配置

| 参数 | 值 |
|------|-----|
| 网络名称 | Avalanche Fuji C-Chain |
| RPC URL | https://api.avax-test.network/ext/bc/C/rpc |
| Chain ID | 43113 |
| 货币符号 | AVAX |
| 区块浏览器 | https://testnet.snowtrace.io |

---

## 💰 商业模式

| 收入来源 | 模式 | 面向 |
|----------|------|------|
| 云领养订阅费 | ¥29/月/只，平台抽取 17% | C 端 |
| AI 纪念品 | AI 宠物肖像画 ¥19-39 | C 端 |
| 救助站 SaaS 工具费 | 小型免费，大型按月付费 | B 端 |
| 企业 CSR 合作 | 品牌冠名救助项目，链上可验证 | B 端 |
| 宠物信托管理费 | 照护基金年费 1-2% | C 端（远期） |

---

## 🆚 竞品差异化

| 维度 | 街猫 | Token Tails | FurEver |
|------|------|-------------|---------|
| 核心模式 | 猫屋模糊投喂 | 游戏化娱乐 | 一对一精确陪伴 |
| 资金透明 | 不透明 | 部分透明 | 每笔链上可查 |
| 情感连接 | 无 | 弱（虚拟猫） | 强（真实动物） |
| 生命线覆盖 | 仅投喂 | 仅游戏内 | 救助→领养→终老 |
| 宠物信托 | 无 | 无 | 有（远期） |

---

## 🔗 为什么用 Web3？

我们不是为了用区块链而用区块链。产品的核心体验全部用传统技术实现，只把**真正需要多方信任的环节**放到链上：

1. **资金透明** — 任何人可以独立验证每笔捐款的去向
2. **数据不可篡改** — 救助站无法修改已上链的记录
3. **永久存活** — 即使平台倒闭，链上数据依然存在

---

## 📅 产品路线图

**Phase 1 — Demo（当前）**
动物链上生命档案、一对一云领养、捐赠资金链上透明可查

**Phase 2 — 宠物主人档案 + NFT 领养证书**
领养信用体系、宠物健康管理工具

**Phase 3 — 宠物信托**
智能合约信托、心跳确认机制、生命线闭环

**Phase 4 — 生态合作**
宠物保险数据对接、企业 CSR 透明化、动物保护立法数据支撑

---

## 📜 License

MIT

---

<p align="center">
  🐾 每一只动物的生命旅程，都值得被永远记住
  <br><br>
  Built with ❤️ on Avalanche · Pink Hackathon 2026
</p>
