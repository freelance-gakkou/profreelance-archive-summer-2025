# プロフリアーカイブLP制作・修正マニュアル

最初にこのマニュアルをClaude Codeにコピペしてから、作業を開始してください。

📋 既存プロジェクト情報

🌸 春講座LP（ゼロからのデザイン思考）

- プロジェクト名: profreelance-archive-spring-2025
- GitHubリポジトリ: https://github.com/murakamikaizoku-inc/profreelance-archive-spring-2025
- 本番サイト: https://design-ondemand.freelance-gakkou.com/
- 決済URL: https://m.freelance-gakkou.com/p/r/vlQfHGVC

🎓 新年講座LP（お仕事キホン講座）

- プロジェクト名: profreelance-archive-newyear-2025
- GitHubリポジトリ: https://github.com/murakamikaizoku-inc/profreelance-archive-newyear-2025
- 本番サイト: https://basic-ondemand.freelance-gakkou.com/
- 決済URL: https://m.freelance-gakkou.com/p/r/m6JHtoG9

🏖 夏講座LP（マーケティング思考）

- プロジェクト名: profreelance-archive-summer-2025
- GitHubリポジトリ: https://github.com/freelance-gakkou/profreelance-archive-summer-2025
- 本番サイト: https://profreelance-archive-summer-2025.vercel.app/
- 決済URL: 未設定（購入ボタンは無効化済み）

---

🚀 Claude Codeへの指示文（コピペ用）

パターン1: 既存LPを修正する場合

【既存LP修正作業】

以下の既存講座LPの修正を行います：

📋 対象プロジェクト
□ 春講座LP（ゼロからのデザイン思考）
- リポジトリ: https://github.com/murakamikaizoku-inc/profreelance-archive-spring-2025
- 本番サイト: https://design-ondemand.freelance-gakkou.com/
- 決済URL: https://m.freelance-gakkou.com/p/r/vlQfHGVC

□ 新年講座LP（お仕事キホン講座）
- リポジトリ: https://github.com/murakamikaizoku-inc/profreelance-archive-newyear-2025
- 本番サイト: https://basic-ondemand.freelance-gakkou.com/
- 決済URL: https://m.freelance-gakkou.com/p/r/m6JHtoG9

□ 夏講座LP（マーケティング思考）
- リポジトリ: https://github.com/freelance-gakkou/profreelance-archive-summer-2025
- 本番サイト: https://profreelance-archive-summer-2025.vercel.app/
- 決済URL: 未設定（購入ボタンは無効化済み）

🛠 作業手順

1. 指定されたリポジトリをクローン
2. 最新版を取得（git pull）
3. メインファイル（src/pages/index.astro）を確認
4. 修正内容を適用
5. 変更内容をプレビュー表示
6. 問題なければコミット・プッシュ
7. デプロイ完了を確認

修正したい内容を具体的に教えてください。
例：「価格を14,900円から15,900円に変更」

パターン2: 新しい講座LPを作成する場合

【新規講座LP作成】

既存の講座LPをテンプレートとして、新しい講座LPを作成します。

📋 テンプレート選択
以下のどれをベースにしますか？
□ 春講座LP（デザイン思考系）- [design-ondemand.freelance-gakkou.com](http://design-ondemand.freelance-gakkou.com/)
□ 新年講座LP（実務スキル系）- [basic-ondemand.freelance-gakkou.com](http://basic-ondemand.freelance-gakkou.com/)
□ 夏講座LP（マーケティング思考系）- [profreelance-archive-summer-2025.vercel.app](https://profreelance-archive-summer-2025.vercel.app/)

🆕 新規講座情報
【必須】以下の情報を教えてください：

- 講座名：〇〇〇
- 季節・時期：〇〇〇（例：夏講座、秋講座）
- 想定ドメイン：[〇〇〇.freelance-gakkou.com](http://xn--w6jaa.freelance-gakkou.com/)
- 価格：〇〇〇円
- 講座内容の特徴：〇〇〇

🛠 作業手順

1. 法人GitHubで新規リポジトリ作成サポート
2. テンプレートLPのコードを複製
3. 新講座用にカスタマイズ
4. Vercelでデプロイ設定
5. 独自ドメイン設定
6. 動作確認

段階的に進めますので、まず新講座の詳細情報を教えてください。

---

📊 季節別プロジェクト命名規則

推奨命名パターン

- 春講座: profreelance-archive-spring-YYYY
- 夏講座: profreelance-archive-summer-YYYY
- 秋講座: profreelance-archive-autumn-YYYY
- 新年講座: profreelance-archive-newyear-YYYY

ドメイン命名パターン

- 春講座: [design-ondemand.freelance-gakkou.com](http://design-ondemand.freelance-gakkou.com/)
- 夏講座: marketing[-ondemand.freelance-gakkou.com](http://summer-ondemand.freelance-gakkou.com/)
- 秋講座: wealth[-ondemand.freelance-gakkou.com](http://autumn-ondemand.freelance-gakkou.com/)
- 新年講座: [basic-ondemand.freelance-gakkou.com](http://basic-ondemand.freelance-gakkou.com/)

---

🔧 よくある修正パターン

💰 価格変更

価格を14,900円から16,800円に変更してください

🎯 講座名変更

「ゼロからのデザイン思考」を「実践デザイン思考マスター講座」に変更してください

📅 開催期間変更

「2025年1月〜3月開催」を「2025年7月〜9月開催」に変更してください

🔗 決済リンク変更

MyASP決済リンクを以下に変更してください：
現在のURL → 新しいURL

🎨 画像差し替え

メインバナー画像を新しい画像に差し替えてください
[画像ファイルをアップロード]

📝 コンテンツ追加

以下のセクションを追加してください：

- 受講生の声
- よくある質問
- 特典情報

---

🎯 作業フロー

既存LP修正の場合

1. Claude Codeを開く
2. パターン1の指示文をコピペ
3. 修正対象を選択（春講座 or 新年講座 or 夏講座）
4. 修正内容を具体的に指示
5. 確認後デプロイ

新規LP作成の場合

1. Claude Codeを開く
2. パターン2の指示文をコピペ
3. テンプレート選択
4. 新講座情報を入力
5. 段階的に制作進行

---

📞 サポート情報

本番サイト一覧

- 🌸 春講座: https://design-ondemand.freelance-gakkou.com/
- 🎓 新年講座: https://basic-ondemand.freelance-gakkou.com/
- 🏖 夏講座: https://profreelance-archive-summer-2025.vercel.app/
- 🍂 秋講座: （作成時に決定）

緊急時対応

【講座名】のサイトに問題があります。
以下を確認してください：

1. 表示エラーの詳細
2. 最近の変更内容
3. 復旧が必要な場合は前回動作バージョンに戻す

技術サポート

以下の情報と一緒に質問してください：

- 作業中のプロジェクト名
- 発生している問題の詳細
- エラーメッセージ（あれば）
- 期待する動作

---

💡 効率的な活用方法

チーム内での共有

1. このマニュアルをチーム全体で共有
2. 作業開始時は必ずClaude Codeにコピペ
3. 変更履歴をチーム内で共有

品質管理

1. 変更前後のスクリーンショット保存
2. 重要な変更は複数人で確認
3. 定期的なバックアップ作成

継続改善

1. 新しいパターンが出たらマニュアル更新
2. 効率的な作業方法をチーム内で共有
3. トラブル事例と解決方法を蓄積