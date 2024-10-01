# Vonage Node Call

Vonage の Node.js SDK を使って、電話をかけるプログラムです。

## プログラムのダウンロード

```sh
git clone https://github.com/mobilebiz/voange-node-call.git
cd vonage-node-call
npm install
```

## 準備

- 電話番号を購入してください。US番号でも構いません。
- Vonageのアプリケーションを作成してください。
![application sample](/images/2024-10-02_8.17.19.png)
- 生成した秘密鍵を`vonage-node-call`フォルダに`private.key`という名前で保存してください。
- 作成したアプリケーションに購入した電話番号をリンクしてください。

## 環境変数の設定

- `.env.sample`を`.env`に名前変更します。
- `.env`を開き、各項目（`VONAGE_APPLICATION_PRIVATE_KEY_PATH`を除く）をご自分の環境にあわせて更新します。

## 実行

```sh
node make-call-ncco.js
```

以下のようなログが表示され、電話がかかってくれば成功です。

```json
{
  uuid: 'f492c477-0709-4fcd-b6ae-d06543f82eea',
  status: 'started',
  direction: 'outbound',
  conversation_uuid: 'CON-c891c6b0-a382-4b2e-849c-11045d9abb28',
  conversationUUID: 'CON-c891c6b0-a382-4b2e-849c-11045d9abb28'
}
```

もし電話がかかってこない場合は、Vonage ダッシュボードから音声ログを確認してみてください。

![音声ログ](/images/2024-10-02_8.06.13.png)
![Voice Inspector](/images/2024-10-02_8.08.42.png)
