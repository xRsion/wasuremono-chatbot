import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#040404] text-white z-50 py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6">
                <rect x="4" y="4" width="7" height="7" fill="#040404" />
                <rect x="4" y="13" width="7" height="7" fill="#040404" />
                <rect x="13" y="4" width="7" height="7" fill="#040404" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg">忘れ物サポートBot(仮)</div>
              <div className="text-xs">探す手間を、なくす。</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-[#f67116] transition">機能</a>
            <a href="#benefits" className="hover:text-[#f67116] transition">導入メリット</a>
            <a href="#contact" className="hover:text-[#f67116] transition">お問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#040404] text-white pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-xs md:text-sm mb-3 md:mb-4 border-b border-white inline-block pb-1">忘れ物対応の業務効率化</p>
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                AIチャットボットで<br />
                忘れ物対応を自動化
              </h1>
              <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                施設・店舗・イベント会場での忘れ物対応に時間を取られていませんか？
                AIチャットボットが忘れ物をお客様に自動で案内。
                問い合わせ対応の負担を大幅に削減します。
              </p>

              <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-6 md:mb-12">
                <div className="bg-white text-[#040404] px-2 md:px-3 py-1 rounded text-xs md:text-sm font-bold whitespace-nowrap">
                  対応コスト 最大70%削減
                </div>
                <div className="bg-white text-[#040404] px-2 md:px-3 py-1 rounded text-xs md:text-sm font-bold">
                  AI搭載
                </div>
                <div className="bg-white text-[#040404] px-2 md:px-3 py-1 rounded text-xs md:text-sm font-bold whitespace-nowrap">
                  24時間 自動対応
                </div>
                <div className="bg-white text-[#040404] px-2 md:px-3 py-1 rounded text-xs md:text-sm font-bold">
                  簡単導入
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button asChild className="bg-[#f67116] hover:bg-[#e56105] text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-md w-full sm:w-auto">
                  <a href="https://ai-work.xrsion.co.jp/chat/7JBGaf0CpCxWmRSJ" target="_blank" rel="noopener noreferrer">
                    デモを見る
                    <span className="ml-2">→</span>
                  </a>
                </Button>
                <Button asChild variant="outline" className="bg-transparent border-2 border-[#f67116] text-[#f67116] hover:bg-[#f67116] hover:text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-md w-full sm:w-auto">
                  <a href="#contact">
                    お問い合わせ
                    <span className="ml-2">→</span>
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center order-1 md:order-2">
              <Image
                src="/mocup.png"
                alt="忘れ物サポートBot Mockup"
                width={600}
                height={600}
                className="w-full h-auto max-w-md md:max-w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-6 md:py-8 px-4 md:px-6 border-b">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <div className="text-xs md:text-sm font-bold">問い合わせ削減率 平均65%</div>
          <div className="text-xs md:text-sm">対応時間 平均70%短縮</div>
          <div className="text-xs md:text-sm">導入実績 50施設以上</div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="bg-[#fbfafa] py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            忘れ物対応、こんなお悩みありませんか？
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="aspect-video bg-[#6992ea]/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image src="/assets/images/problem01.png" alt="電話対応" width={400} height={225} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">電話・メール対応に追われる</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  「○○を落としませんでしたか？」という問い合わせに一件ずつ対応するため、本来の業務に集中できない。
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="aspect-video bg-[#6992ea]/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image src="/assets/images/problem02.png" alt="管理" width={400} height={225} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">管理が煩雑で非効率</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  Excelやノートでの管理では検索に時間がかかり、スタッフ間での情報共有も困難。
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="aspect-video bg-[#6992ea]/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image src="/assets/images/problem03.png" alt="営業時間" width={400} height={225} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">営業時間外は対応できない</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  お客様が忘れ物に気づくのは帰宅後が多いのに、営業時間外は問い合わせに対応できず機会損失が発生。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#040404] text-white py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4">
            忘れ物サポートBotの
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            3つの主要機能
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/10 rounded-lg p-6 md:p-8">
              <div className="mb-3 md:mb-4 flex justify-center">
                <Image src="/icons/chat.svg" alt="会話" width={60} height={60} className="md:w-20 md:h-20" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">自然な会話で検索</h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                「昨日財布を落としました」「黒いカバンありませんか？」など、自然な言葉で問い合わせ可能。AIが意図を理解して最適な結果を提示します。
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 md:p-8">
              <div className="mb-3 md:mb-4 flex justify-center">
                <Image src="/icons/search.svg" alt="検索" width={60} height={60} className="md:w-20 md:h-20" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">高精度なマッチング</h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                色・種類・場所・日時など複数の条件から該当する忘れ物を検索。お客様が求める情報に素早くたどり着けます。
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 md:p-8">
              <div className="mb-3 md:mb-4 flex justify-center">
                <Image src="/icons/email.svg" alt="メール" width={60} height={60} className="md:w-20 md:h-20" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">スムーズな問い合わせ誘導</h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                該当する忘れ物が見つかった場合、そのまま問い合わせフォームへ誘導。お客様の情報と忘れ物IDを自動で連携し、対応を効率化します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            導入から運用まで、シンプルな3ステップ
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-[#f67116] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">忘れ物データを登録</h3>
              <p className="text-gray-600 text-sm">
                管理画面から忘れ物情報を登録。写真や詳細情報も簡単に追加できます。
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#f67116] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">チャットボット設置</h3>
              <p className="text-gray-600 text-sm">
                提供するコードをWebサイトに埋め込むだけ。5分で設置完了します。
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#f67116] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">自動対応開始</h3>
              <p className="text-gray-600 text-sm">
                お客様がチャットボットから忘れ物を検索。該当があればそのまま問い合わせへ誘導します。
              </p>
            </div>
          </div>

          <p className="text-center max-w-3xl mx-auto text-gray-700">
            複雑な設定や開発は一切不要。シンプルな管理画面で誰でも簡単に運用できます。
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-[#fbfafa] py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            導入で得られるメリット
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/icons/chart-down.svg" alt="コスト削減" width={48} height={48} />
                <h3 className="text-2xl font-bold">問い合わせ対応コストを大幅削減</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                お客様が自分で忘れ物を検索できるため、電話やメールでの問い合わせが平均65%削減。スタッフは本来の業務に集中できます。
              </p>
            </div>
            <div className="aspect-video bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
              <Image src="/assets/images/merit01.png" alt="コスト削減" width={400} height={225} className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="aspect-video bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
              <Image src="/assets/images/merit02.png" alt="24時間対応" width={400} height={225} className="object-cover w-full h-full" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/icons/clock.svg" alt="24時間対応" width={48} height={48} />
                <h3 className="text-2xl font-bold">24時間365日、自動で対応</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                営業時間外でもお客様が忘れ物を検索可能。「明日まで待てない」というお客様のストレスを解消し、顧客満足度が向上します。
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/icons/refresh.svg" alt="リアルタイム更新" width={48} height={48} />
                <h3 className="text-2xl font-bold">シンプルな管理で常に最新</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                管理画面から忘れ物を登録・更新するだけで、チャットボットに即座に反映。複雑な操作は一切不要で、いつでも最新の忘れ物情報がお客様に届きます。
              </p>
            </div>
            <div className="aspect-video bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
              <Image src="/assets/images/merit03.png" alt="リアルタイム更新" width={400} height={225} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            こんな施設におすすめ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            <div className="text-gray-700 font-bold text-sm text-center">🏨<br />ホテル・旅館</div>
            <div className="text-gray-700 font-bold text-sm text-center">🎪<br />イベント会場</div>
            <div className="text-gray-700 font-bold text-sm text-center">🏢<br />商業施設</div>
            <div className="text-gray-700 font-bold text-sm text-center">🎭<br />劇場・ホール</div>
            <div className="text-gray-700 font-bold text-sm text-center">🚉<br />駅・空港</div>
            <div className="text-gray-700 font-bold text-sm text-center">🏪<br />飲食店</div>
            <div className="text-gray-700 font-bold text-sm text-center">🎓<br />学校・塾</div>
            <div className="text-gray-700 font-bold text-sm text-center">💪<br />ジム・スタジオ</div>
            <div className="text-gray-700 font-bold text-sm text-center">🏥<br />病院・クリニック</div>
            <div className="text-gray-700 font-bold text-sm text-center">🎨<br />美術館・博物館</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#fbfafa] py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            導入施設の声
          </h2>

          <p className="text-center text-sm text-gray-600 mb-12">
            実際に導入いただいた施設様からの評価をご紹介します
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-5 h-5 text-[#f67116]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">問い合わせ電話が劇的に減りました</h4>
                <p className="text-sm text-gray-600 mb-4">
                  イベント会場で毎日10件以上あった忘れ物の問い合わせ電話が、導入後は1〜2件に。お客様も「すぐに確認できて便利」と好評です。シンプルな管理画面で誰でも使えるので、導入もスムーズでした。
                </p>
                <p className="text-xs text-gray-500">都内イベント会場 運営担当者様</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-5 h-5 text-[#f67116]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2">24時間対応で顧客満足度が向上</h4>
                <p className="text-gray-600 text-sm mb-4">
                  ホテル営業時間外の深夜に忘れ物に気づいたお客様からも「すぐに確認できて安心した」との声をいただいています。フロントスタッフの負担も減り、本来の接客業務に集中できるようになりました。
                </p>
                <p className="text-xs text-gray-500">シティホテル フロント責任者様</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-white py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            導入のご相談・お問い合わせ
          </h2>
          <p className="text-center text-gray-600 mb-12">
            お気軽にお問い合わせください。担当者より2営業日以内にご連絡いたします。
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">
                <span className="bg-[#414ecd] text-white px-2 py-1 rounded text-xs mr-2">必須</span>
                施設名・組織名
              </label>
              <Input placeholder="例：〇〇ホテル、△△イベント会場" className="w-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">
                  <span className="bg-[#414ecd] text-white px-2 py-1 rounded text-xs mr-2">必須</span>
                  お名前（姓）
                </label>
                <Input placeholder="例：山田" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  <span className="bg-[#414ecd] text-white px-2 py-1 rounded text-xs mr-2">必須</span>
                  お名前（名）
                </label>
                <Input placeholder="例：太郎" className="w-full" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                <span className="bg-[#414ecd] text-white px-2 py-1 rounded text-xs mr-2">必須</span>
                メールアドレス
              </label>
              <Input placeholder="例：contact@example.com" type="email" className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                <span className="bg-[#414ecd] text-white px-2 py-1 rounded text-xs mr-2">必須</span>
                電話番号
              </label>
              <Input placeholder="例：03-1234-5678" className="w-full" />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                <span className="bg-gray-400 text-white px-2 py-1 rounded text-xs mr-2">任意</span>
                施設の種類
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hotel">ホテル・旅館</SelectItem>
                  <SelectItem value="event">イベント会場</SelectItem>
                  <SelectItem value="shopping">商業施設</SelectItem>
                  <SelectItem value="station">駅・空港</SelectItem>
                  <SelectItem value="restaurant">飲食店</SelectItem>
                  <SelectItem value="other">その他</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                <span className="bg-gray-400 text-white px-2 py-1 rounded text-xs mr-2">任意</span>
                お問い合わせ内容
              </label>
              <Input placeholder="ご質問やご要望があればご記入ください" className="w-full" />
            </div>

            <p className="text-xs text-gray-500">
              送信いただくと<a href="#" className="underline">利用規約</a>・<a href="#" className="underline">プライバシーポリシー</a>に同意したことになります。
            </p>

            <Button className="w-full bg-[#f67116] hover:bg-[#e56105] text-white py-6 text-lg">
              お問い合わせを送信
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fbfafa] py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            まずはデモをご体験ください
          </h2>
          <p className="text-gray-600 mb-8">
            実際のチャットボットを体験いただけるデモをご用意しています。<br />
            忘れ物対応の効率化を、ぜひご自身の目でお確かめください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#f67116] hover:bg-[#e56105] text-white px-8 py-6 text-lg">
              <a href="https://ai-work.xrsion.co.jp/chat/7JBGaf0CpCxWmRSJ" target="_blank" rel="noopener noreferrer">
                デモを試してみる →
              </a>
            </Button>
            {/* <Button asChild variant="outline" className="border-2 border-[#f67116] text-[#f67116] hover:bg-[#f67116] hover:text-white px-8 py-6 text-lg">
              <a href="#contact">
                資料ダウンロード
              </a>
            </Button> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">忘れ物サポートBot</h3>
              <p className="text-sm text-gray-600">
                AIチャットボットで忘れ物対応を自動化。<br />
                施設・店舗の業務効率化を実現します。
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">リンク</h3>
              <div className="space-y-2 text-sm">
                <div><a href="#features" className="text-gray-600 hover:text-[#f67116]">機能</a></div>
                <div><a href="#benefits" className="text-gray-600 hover:text-[#f67116]">導入メリット</a></div>
                <div><a href="#contact" className="text-gray-600 hover:text-[#f67116]">お問い合わせ</a></div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">お問い合わせ</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div>導入に関するご相談</div>
                <div>デモのお申し込み</div>
                <div>お気軽にお問い合わせください</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#040404] rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4">
                  <rect x="4" y="4" width="6" height="6" fill="white" />
                  <rect x="4" y="13" width="6" height="6" fill="white" />
                  <rect x="13" y="4" width="6" height="6" fill="white" />
                </svg>
              </div>
              <span className="font-bold">忘れ物サポートBot(仮)</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
                <span className="text-xs">X</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
                <span className="text-xs">📧</span>
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="flex justify-center gap-6 text-sm mb-4">
              <a href="#" className="hover:underline text-gray-600">利用規約</a>
              <a href="#" className="hover:underline text-gray-600">プライバシーポリシー</a>
              <a href="#" className="hover:underline text-gray-600">特定商取引法に基づく表記</a>
            </div>
            <p className="text-xs text-gray-500">© 2025 忘れ物サポートBot. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <div id="float-message" className="fixed text-xs bottom-[80px] right-[10px] hidden sm:block">
        <div>埋め込み型のデモはこちら👇</div>
      </div>
    </main>
  );
}
