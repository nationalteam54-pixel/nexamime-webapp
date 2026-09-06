const tg = window.Telegram?.WebApp;
if(tg){tg.ready();tg.expand();}

function show(page){
  const s=document.getElementById('screen');
  if(page==='home'){location.reload();return}
  const data={
    game:{title:'🎮 Game / Mining',body:`<div class="hero-card"><div class="hero-label">ACCRUED</div><div class="balance">$0.00</div><div class="profit">Hourly • Daily • Monthly</div></div><div class="section-title">Mining Plans</div><div class="list">${plan('3 Coins','10% per day','$0.30 daily')}${plan('5 Coins','14% per day','$0.70 daily')}${plan('10 Coins','16% per day','$1.60 daily')}${plan('25 Coins','18% per day','$4.50 daily')}${plan('50 Coins','20% per day','$10.00 daily')}</div>`},
    deposit:{title:'💳 Deposit',body:`<div class="section-title">Select Coin / Network</div><div class="list">${opt('🔺 TRX','TRC20 • Minimum $1.00')}${opt('🔷 GRAM','TON • Minimum $1.00')}${opt('🟡 BNB','BEP20 • Minimum $2.00')}${opt('🔵 LTC','Minimum $1.00')}${opt('🟣 SOL','Minimum $1.00')}${opt('🟢 USDT','BEP20 / TRC20 / TON / SOLANA')}</div>`},
    withdraw:{title:'💸 Withdraw',body:`<div class="hero-card"><div class="hero-label">AVAILABLE BALANCE</div><div class="balance">$10.00</div></div><div class="section-title">Select Network</div><div class="list">${opt('🔺 TRX','Minimum $1.00')}${opt('🔷 GRAM','Minimum $1.00')}${opt('🟡 BNB','Minimum $2.00')}${opt('🔵 LTC','Minimum $1.00')}${opt('🟣 SOL','Minimum $1.00')}</div>`},
    referrals:{title:'👥 Referrals',body:`<div class="hero-card"><div class="hero-label">TOTAL REFERRAL INCOME</div><div class="balance">$0.00</div><div class="profit">0 invited users</div></div><div class="section-title">Your Referral Link</div><div class="option"><b>Referral link</b><small>Will be generated from your Telegram account.</small></div>`}
  };
  const d=data[page];
  s.innerHTML=`<div class="page"><button class="back" onclick="show('home')">← Back</button><h2>${d.title}</h2>${d.body}</div>`;
  document.querySelectorAll('.bottom button').forEach(x=>x.classList.remove('active'));
}
function opt(a,b){return `<button class="option"><b>${a}</b><small>${b}</small></button>`}
function plan(a,b,c){return `<button class="option"><b>💎 ${a}</b><small>${b} • ${c}</small></button>`}
