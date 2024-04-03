# 翻牌動的拆解

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 牌類程式部份
1. 由首頁連結到 intro/game，這部份以你們的架構去拆了
2. game.jsx 用來配置牌以外的環境
3. 使用 Card.jsx 來產出卡牌
4. 卡牌使用時傳入 posiName，內容為 card1~ card3 等從 1 計算的卡牌名稱
5. 卡牌使用時傳入 cardNum，做為卡牌翻開始數字名稱
6. 卡牌元件中，點擊卡牌後用 forward1、forward2 與 active 三個狀態來切換 class
   用來做為卡牌三個位置的切換
   動畫由 class 中的屬性數字去自動 transition
7. 老師只支援到這部份，其他把花色換掉正反面狀態指定，加到你想要的牌量，請自己來