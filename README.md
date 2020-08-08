# Average2
平均値を求めるアプリの進化版です

<h2>ファイルの説明</h2>
<ul>
  <li>index.html→ホームディレクトリです。これがメインとなって、平均値を求める作業が可能になります</li>
  <li>html/dis_command.html→ファイル名の通り、コマンドの説明を行っています。なるべく簡単な組み合わせでコマンドを作っています</li>
  <li>js/index.js→ユーザーからの操作に対応する処理を行います</li>
  <li>js/keyboard.js→キーボードからのコマンド入力等に対する処理の振り分けを行います。大体、処理はindex.jsになります</li>
  <li>js/viewresult.js→確定ボタンが押された時の処理です。今まで入力してきた数値を集めて平均を求めてという処理から、この部分を削除してもう一度平均を求めるという作業まで、結構使われるファイルかもしれません</li>
</ul>

<h2>クライアントに関する注意</h2>
このアプリではPC版のみ、コマンド操作が正確にできると保証されており、<b>スマートフォン、タブレットなどキーボードがない場合の操作の正確性に関しては保証できません</b>。
