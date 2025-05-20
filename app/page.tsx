"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Copy, Check } from "lucide-react"

export default function AkcigerPatolojiRaporlamaSistemi() {
  // Form state
  const [formData, setFormData] = useState({
    // Tümör Özellikleri
    tumorHistoloji: "",
    histolojikTip: "",
    histolojikGrade: "",
    stas: "",
    visseralPlevraInvazyon: "",
    lenfovaskulerInvazyon: "",

    // Tümör Uzanımı
    tumorUzanimi: [] as string[],

    // Tedavi Etkisi
    tedaviEtkisi: "",

    // Rezeksiyon Sınırları
    bronkiyalSinir: [] as string[],
    vaskulerSinir: "",
    parankimalSinir: [] as string[],
    digerSinirlar: "",

    // Lenf Nodları
    lenfNoduSayisi: "",
    tutulanLenfNoduSayisi: "",
    ekstranodal: "",

    // Uzak Metastaz
    uzakMetastaz: [] as string[],

    // Evreleme
    tnmTanimlayici: [] as string[],
    pT: "",
    pN: "",
    pM: "",

    // Ek Bulgular
    ekBulgular: [] as string[],
    digerEkBulgular: "",

    // Ek Notlar
    ekNotlar: "",
  })

  // Seçim state'leri
  const [seciliHistolojikTip, setHistolojikTip] = useState<string | null>(null)
  const [seciliHistolojikGrade, setHistolojikGrade] = useState<string | null>(null)
  const [seciliSTAS, setSTAS] = useState<string | null>(null)
  const [seciliVisseralPlevra, setVisseralPlevra] = useState<string | null>(null)
  const [seciliLVI, setLVI] = useState<string | null>(null)
  const [seciliTumorUzanimi, setTumorUzanimi] = useState<string[]>([])
  const [seciliTedaviEtkisi, setTedaviEtkisi] = useState<string | null>(null)
  const [seciliBronkiyalSinir, setBronkiyalSinir] = useState<string[]>([])
  const [seciliVaskulerSinir, setVaskulerSinir] = useState<string | null>(null)
  const [seciliParankimalSinir, setParankimalSinir] = useState<string[]>([])
  const [seciliEkstranodal, setEkstranodal] = useState<string | null>(null)
  const [seciliUzakMetastaz, setUzakMetastaz] = useState<string[]>([])
  const [seciliTNMTanimlayici, setTNMTanimlayici] = useState<string[]>([])
  const [seciliPT, setPT] = useState<string | null>(null)
  const [seciliPN, setPN] = useState<string | null>(null)
  const [seciliPM, setPM] = useState<string | null>(null)
  const [seciliEkBulgular, setEkBulgular] = useState<string[]>([])

  // Kopyalama durumu
  const [kopyalandi, setKopyalandi] = useState(false)

  // Form değişikliklerini izle
  useEffect(() => {
    // Histolojik tip güncelleme
    if (seciliHistolojikTip) {
      setFormData((prev) => ({ ...prev, histolojikTip: seciliHistolojikTip }))
    }

    // Histolojik grade güncelleme
    if (seciliHistolojikGrade) {
      setFormData((prev) => ({ ...prev, histolojikGrade: seciliHistolojikGrade }))
    }

    // STAS güncelleme
    if (seciliSTAS) {
      setFormData((prev) => ({ ...prev, stas: seciliSTAS }))
    }

    // Visseral plevra invazyonu güncelleme
    if (seciliVisseralPlevra) {
      setFormData((prev) => ({ ...prev, visseralPlevraInvazyon: seciliVisseralPlevra }))
    }

    // LVI güncelleme
    if (seciliLVI) {
      setFormData((prev) => ({ ...prev, lenfovaskulerInvazyon: seciliLVI }))
    }

    // Tümör uzanımı güncelleme
    setFormData((prev) => ({ ...prev, tumorUzanimi: seciliTumorUzanimi }))

    // Tedavi etkisi güncelleme
    if (seciliTedaviEtkisi) {
      setFormData((prev) => ({ ...prev, tedaviEtkisi: seciliTedaviEtkisi }))
    }

    // Bronkiyal sınır güncelleme
    setFormData((prev) => ({ ...prev, bronkiyalSinir: seciliBronkiyalSinir }))

    // Vasküler sınır güncelleme
    if (seciliVaskulerSinir) {
      setFormData((prev) => ({ ...prev, vaskulerSinir: seciliVaskulerSinir }))
    }

    // Parankimal sınır güncelleme
    setFormData((prev) => ({ ...prev, parankimalSinir: seciliParankimalSinir }))

    // Ekstranodal uzanım güncelleme
    if (seciliEkstranodal) {
      setFormData((prev) => ({ ...prev, ekstranodal: seciliEkstranodal }))
    }

    // Uzak metastaz güncelleme
    setFormData((prev) => ({ ...prev, uzakMetastaz: seciliUzakMetastaz }))

    // TNM tanımlayıcı güncelleme
    setFormData((prev) => ({ ...prev, tnmTanimlayici: seciliTNMTanimlayici }))

    // pT güncelleme
    if (seciliPT) {
      setFormData((prev) => ({ ...prev, pT: seciliPT }))
    }

    // pN güncelleme
    if (seciliPN) {
      setFormData((prev) => ({ ...prev, pN: seciliPN }))
    }

    // pM güncelleme
    if (seciliPM) {
      setFormData((prev) => ({ ...prev, pM: seciliPM }))
    }

    // Ek bulgular güncelleme
    setFormData((prev) => ({ ...prev, ekBulgular: seciliEkBulgular }))
  }, [
    seciliHistolojikTip,
    seciliHistolojikGrade,
    seciliSTAS,
    seciliVisseralPlevra,
    seciliLVI,
    seciliTumorUzanimi,
    seciliTedaviEtkisi,
    seciliBronkiyalSinir,
    seciliVaskulerSinir,
    seciliParankimalSinir,
    seciliEkstranodal,
    seciliUzakMetastaz,
    seciliTNMTanimlayici,
    seciliPT,
    seciliPN,
    seciliPM,
    seciliEkBulgular,
  ])

  // Input değişikliklerini işle
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Tümör uzanımı seçimlerini işle
  const handleTumorUzanimiChange = (value: string) => {
    setTumorUzanimi((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  // Bronkiyal sınır seçimlerini işle
  const handleBronkiyalSinirChange = (value: string) => {
    setBronkiyalSinir((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  // Parankimal sınır seçimlerini işle
  const handleParankimalSinirChange = (value: string) => {
    setParankimalSinir((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  // Uzak metastaz seçimlerini işle
  const handleUzakMetastazChange = (value: string) => {
    setUzakMetastaz((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  // TNM tanımlayıcı seçimlerini işle
  const handleTNMTanimlayiciChange = (value: string) => {
    setTNMTanimlayici((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  // Ek bulgular seçimlerini işle
  const handleEkBulgularChange = (value: string) => {
    setEkBulgular((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value)
      } else {
        return [...prev, value]
      }
    })
  }

  // Raporu kopyala
  const kopyalaRapor = () => {
    const raporMetni = generateRaporMetni()
    navigator.clipboard.writeText(raporMetni)
    setKopyalandi(true)
    setTimeout(() => setKopyalandi(false), 2000)
  }

  // Rapor metnini oluştur
  const generateRaporMetni = () => {
    let rapor = "AKCİĞER KANSERİ PATOLOJİ RAPORU\n\n"

    // Tümör histolojisi ve immünohistokimyasal çalışmalar
    if (formData.tumorHistoloji) {
      rapor += "- Tümör histolojisi ve immünohistokimyasal çalışmalar: \n  - " + formData.tumorHistoloji + "\n"
    }

    // Histolojik tip
    if (formData.histolojikTip) {
      rapor += "\n- Histolojik tip: " + formData.histolojikTip + "\n"
    }

    // Histolojik grade
    if (formData.histolojikGrade) {
      rapor += "- Histolojik grade: " + formData.histolojikGrade + "\n"
    }

    // STAS
    if (formData.stas) {
      rapor += "- Hava boşlukları yoluyla yayılma (STAS): " + formData.stas + "\n"
    }

    // Visseral plevra invazyonu
    if (formData.visseralPlevraInvazyon) {
      rapor += "- Visseral plevra invazyonu: " + formData.visseralPlevraInvazyon + "\n"
    }

    // Lenfovasküler invazyon
    if (formData.lenfovaskulerInvazyon) {
      rapor += "- Lenfovasküler ve/veya Vasküler İnvazyon: " + formData.lenfovaskulerInvazyon + "\n"
    }

    // Tümör uzanımı
    if (formData.tumorUzanimi.length > 0) {
      rapor += "- Tümör uzanımı: \n"
      formData.tumorUzanimi.forEach((uzanim) => {
        rapor += uzanim + "\n"
      })
    }

    // Tedavi etkisi
    if (formData.tedaviEtkisi) {
      rapor += "- Tedavi etkisi: " + formData.tedaviEtkisi + "\n"
    }

    // Rezeksiyon sınırları
    if (
      formData.bronkiyalSinir.length > 0 ||
      formData.vaskulerSinir ||
      formData.parankimalSinir.length > 0 ||
      formData.digerSinirlar
    ) {
      rapor += "\n- Rezeksiyon sınırları: \n"

      // Bronşiyal sınır
      if (formData.bronkiyalSinir.length > 0) {
        rapor += "  - Bronşiyal sınırlar: \n"
        formData.bronkiyalSinir.forEach((sinir) => {
          rapor += "  " + sinir + "\n"
        })
      }

      // Vasküler sınır
      if (formData.vaskulerSinir) {
        rapor += "  - Vasküler sınır: \n    - " + formData.vaskulerSinir + "\n"
      }

      // Parankimal sınır
      if (formData.parankimalSinir.length > 0) {
        rapor += "  - Parankimal sınır: \n"
        formData.parankimalSinir.forEach((sinir) => {
          rapor += "  " + sinir + "\n"
        })
      }

      // Diğer sınırlar
      if (formData.digerSinirlar) {
        rapor += "  - Diğer doku sınır(lar)ı (belirtiniz): \n    - " + formData.digerSinirlar + "\n"
      }
    }

    // Bölgesel lenf nodları
    if (formData.lenfNoduSayisi || formData.tutulanLenfNoduSayisi || formData.ekstranodal) {
      rapor += "\n- Bölgesel lenf nodları: \n"

      if (formData.lenfNoduSayisi) {
        rapor += "  - İncelenen bölgesel lenf nodu sayısı: " + formData.lenfNoduSayisi + "\n"
      }

      if (formData.tutulanLenfNoduSayisi) {
        rapor += "  - Tutulan lenf nodu sayısı: " + formData.tutulanLenfNoduSayisi + "\n"
      }

      if (formData.ekstranodal) {
        rapor += "  - Ekstranodal uzanım: " + formData.ekstranodal + "\n"
      }
    }

    // Uzak metastaz
    if (formData.uzakMetastaz.length > 0) {
      rapor += "\n- Uzak metastaz: \n"
      formData.uzakMetastaz.forEach((metastaz) => {
        rapor += metastaz + "\n"
      })
    }

    // Patolojik evre sınıflaması
    if (formData.tnmTanimlayici.length > 0 || formData.pT || formData.pN || formData.pM) {
      rapor += "\n- Patolojik evre sınıflaması (pTNM, AJCC 9. Baskı): \n"

      // TNM tanımlayıcıları
      if (formData.tnmTanimlayici.length > 0) {
        rapor += "  - TNM Tanımlayıcıları: \n"
        formData.tnmTanimlayici.forEach((tanimlayici) => {
          rapor += "    " + tanimlayici + "\n"
        })
      }

      // pT
      if (formData.pT) {
        rapor += "  - Primer tümör (pT): \n    - " + formData.pT + "\n"
      }

      // pN
      if (formData.pN) {
        rapor += "  - Bölgesel lenf nodları (pN): \n    - " + formData.pN + "\n"
      }

      // pM
      if (formData.pM && formData.pM !== "Not applicable - pM gönderilen örneklerden belirlenemiyor") {
        rapor += "  - Uzak metastaz (sadece patolojik olarak doğrulanmışsa gereklidir): \n    - " + formData.pM + "\n"
      }

      // Özet pTNM
      const prefix = formData.tnmTanimlayici.length > 0 ? formData.tnmTanimlayici.map((t) => t.charAt(0)).join("") : ""
      const tComponent = formData.pT ? formData.pT.split(":")[0] : ""
      const nComponent = formData.pN ? formData.pN.split(":")[0] : ""
      const mComponent =
        formData.pM && formData.pM !== "Not applicable - pM gönderilen örneklerden belirlenemiyor"
          ? formData.pM.split(":")[0]
          : ""

      if (tComponent || nComponent || mComponent) {
        rapor += "  - Özet: " + prefix + tComponent + nComponent + mComponent + "\n"
      }
    }

    // Ek patolojik bulgular
    if (formData.ekBulgular.length > 0 || formData.digerEkBulgular) {
      rapor += "\n- Ek patolojik bulgular: \n"

      formData.ekBulgular.forEach((bulgu) => {
        rapor += "  - " + bulgu + "\n"
      })

      if (formData.digerEkBulgular) {
        rapor += "  - Diğer (belirtiniz): " + formData.digerEkBulgular + "\n"
      }
    }

    // Ek notlar
    if (formData.ekNotlar) {
      rapor += "\n- Ek notlar: \n  - " + formData.ekNotlar + "\n"
    }

    return rapor
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Akciğer Kanseri Patoloji Raporlama Sistemi</h1>
      <p className="text-center mb-6 text-sm text-muted-foreground">CAP Protokolü (AJCC 9. Baskı) temel alınmıştır</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sol Sütun - Form Alanları */}
        <div className="space-y-6">
          <Tabs defaultValue="tumor" className="w-full">
            <TabsList className="grid grid-cols-5 mb-4">
              <TabsTrigger value="tumor">Tümör</TabsTrigger>
              <TabsTrigger value="uzanim">Uzanım</TabsTrigger>
              <TabsTrigger value="sinirlar">Sınırlar</TabsTrigger>
              <TabsTrigger value="lenf">Lenf/Metastaz</TabsTrigger>
              <TabsTrigger value="evreleme">Evreleme</TabsTrigger>
            </TabsList>

            {/* Tümör Özellikleri Tab */}
            <TabsContent value="tumor" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-lg font-semibold mb-4">Tümör Özellikleri</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tumorHistoloji">Tümör histolojisi ve immünohistokimyasal çalışmalar</Label>
                      <Textarea
                        id="tumorHistoloji"
                        name="tumorHistoloji"
                        value={formData.tumorHistoloji}
                        onChange={handleInputChange}
                        placeholder="Tümör histolojisi ve immünohistokimyasal çalışmalar..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Histolojik tip</Label>
                      <select
                        className="w-full p-2 border rounded-md"
                        value={seciliHistolojikTip || ""}
                        onChange={(e) => setHistolojikTip(e.target.value)}
                      >
                        <option value="">Seçiniz</option>
                        <optgroup label="Adenokarsinom">
                          <option value="Adenokarsinom in situ (AIS), nonmüsinöz">
                            Adenokarsinom in situ (AIS), nonmüsinöz
                          </option>
                          <option value="Adenokarsinom in situ (AIS), müsinöz">
                            Adenokarsinom in situ (AIS), müsinöz
                          </option>
                          <option value="Minimal invaziv adenokarsinom, nonmüsinöz">
                            Minimal invaziv adenokarsinom, nonmüsinöz
                          </option>
                          <option value="Minimal invaziv adenokarsinom, müsinöz">
                            Minimal invaziv adenokarsinom, müsinöz
                          </option>
                          <option value="İnvaziv adenokarsinom, lepidik predominant">
                            İnvaziv adenokarsinom, lepidik predominant
                          </option>
                          <option value="İnvaziv adenokarsinom, asiner predominant">
                            İnvaziv adenokarsinom, asiner predominant
                          </option>
                          <option value="İnvaziv adenokarsinom, papiller predominant">
                            İnvaziv adenokarsinom, papiller predominant
                          </option>
                          <option value="İnvaziv adenokarsinom, mikropapiller predominant">
                            İnvaziv adenokarsinom, mikropapiller predominant
                          </option>
                          <option value="İnvaziv adenokarsinom, solid predominant">
                            İnvaziv adenokarsinom, solid predominant
                          </option>
                          <option value="İnvaziv müsinöz adenokarsinom">İnvaziv müsinöz adenokarsinom</option>
                          <option value="Mikst invaziv müsinöz ve nonmüsinöz adenokarsinom">
                            Mikst invaziv müsinöz ve nonmüsinöz adenokarsinom
                          </option>
                          <option value="Kolloid adenokarsinom">Kolloid adenokarsinom</option>
                          <option value="Fetal adenokarsinom">Fetal adenokarsinom</option>
                          <option value="Enterik tip adenokarsinom">Enterik tip adenokarsinom</option>
                        </optgroup>
                        <optgroup label="Skuamöz Hücreli Karsinom">
                          <option value="Skuamöz hücreli karsinom in situ (SCIS)">
                            Skuamöz hücreli karsinom in situ (SCIS)
                          </option>
                          <option value="İnvaziv skuamöz hücreli karsinom, keratinize">
                            İnvaziv skuamöz hücreli karsinom, keratinize
                          </option>
                          <option value="İnvaziv skuamöz hücreli karsinom, non-keratinize">
                            İnvaziv skuamöz hücreli karsinom, non-keratinize
                          </option>
                          <option value="İnvaziv skuamöz hücreli karsinom, bazaloid">
                            İnvaziv skuamöz hücreli karsinom, bazaloid
                          </option>
                        </optgroup>
                        <optgroup label="Diğer Karsinomlar">
                          <option value="Lenfoepitelyal karsinom">Lenfoepitelyal karsinom</option>
                          <option value="Büyük hücreli karsinom">Büyük hücreli karsinom</option>
                          <option value="Adenoskuamöz karsinom">Adenoskuamöz karsinom</option>
                          <option value="Pleomorfik karsinom">Pleomorfik karsinom</option>
                          <option value="İğsi hücreli karsinom">İğsi hücreli karsinom</option>
                          <option value="Dev hücreli karsinom">Dev hücreli karsinom</option>
                          <option value="Karsinosarkom">Karsinosarkom</option>
                          <option value="Pulmoner blastom">Pulmoner blastom</option>
                          <option value="NUT karsinom">NUT karsinom</option>
                          <option value="Torasik SMARCA4-eksik indiferansiye tümör">
                            Torasik SMARCA4-eksik indiferansiye tümör
                          </option>
                        </optgroup>
                        <optgroup label="Tükürük Bezi Tipi Tümörler">
                          <option value="Adenoid kistik karsinom">Adenoid kistik karsinom</option>
                          <option value="Epitelyal-miyoepitelyal karsinom">Epitelyal-miyoepitelyal karsinom</option>
                          <option value="Mukoepidermoid karsinom">Mukoepidermoid karsinom</option>
                        </optgroup>
                        <optgroup label="Nöroendokrin Tümörler">
                          <option value="Tipik karsinoid / Nöroendokrin tümör, grade 1">
                            Tipik karsinoid / Nöroendokrin tümör, grade 1
                          </option>
                          <option value="Atipik karsinoid / Nöroendokrin tümör, grade 2">
                            Atipik karsinoid / Nöroendokrin tümör, grade 2
                          </option>
                          <option value="Karsinoid tümör, NOS / Nöroendokrin tümör, NOS">
                            Karsinoid tümör, NOS / Nöroendokrin tümör, NOS
                          </option>
                          <option value="Küçük hücreli karsinom">Küçük hücreli karsinom</option>
                          <option value="Kombine küçük hücreli karsinom">Kombine küçük hücreli karsinom</option>
                          <option value="Büyük hücreli nöroendokrin karsinom">
                            Büyük hücreli nöroendokrin karsinom
                          </option>
                          <option value="Kombine büyük hücreli nöroendokrin karsinom">
                            Kombine büyük hücreli nöroendokrin karsinom
                          </option>
                        </optgroup>
                        <optgroup label="Diğer">
                          <option value="Karsinom, tip belirlenemiyor">Karsinom, tip belirlenemiyor</option>
                          <option value="Küçük hücreli dışı karsinom, alt tip belirlenemiyor">
                            Küçük hücreli dışı karsinom, alt tip belirlenemiyor
                          </option>
                        </optgroup>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label>Histolojik grade</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <Button
                          variant={seciliHistolojikGrade === "G1: İyi diferansiye" ? "default" : "outline"}
                          onClick={() => setHistolojikGrade("G1: İyi diferansiye")}
                          className="w-full"
                        >
                          G1: İyi diferansiye
                        </Button>
                        <Button
                          variant={seciliHistolojikGrade === "G2: Orta diferansiye" ? "default" : "outline"}
                          onClick={() => setHistolojikGrade("G2: Orta diferansiye")}
                          className="w-full"
                        >
                          G2: Orta diferansiye
                        </Button>
                        <Button
                          variant={seciliHistolojikGrade === "G3: Kötü diferansiye" ? "default" : "outline"}
                          onClick={() => setHistolojikGrade("G3: Kötü diferansiye")}
                          className="w-full"
                        >
                          G3: Kötü diferansiye
                        </Button>
                        <Button
                          variant={seciliHistolojikGrade === "G4: İndiferansiye" ? "default" : "outline"}
                          onClick={() => setHistolojikGrade("G4: İndiferansiye")}
                          className="w-full"
                        >
                          G4: İndiferansiye
                        </Button>
                        <Button
                          variant={seciliHistolojikGrade === "GX: Değerlendirilemiyor" ? "default" : "outline"}
                          onClick={() => setHistolojikGrade("GX: Değerlendirilemiyor")}
                          className="w-full"
                        >
                          GX: Değerlendirilemiyor
                        </Button>
                        <Button
                          variant={seciliHistolojikGrade === "Uygulanamaz" ? "default" : "outline"}
                          onClick={() => setHistolojikGrade("Uygulanamaz")}
                          className="w-full"
                        >
                          Uygulanamaz
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Hava boşlukları yoluyla yayılma (STAS)</Label>
                      <div className="flex gap-2 mt-2">
                        <Button
                          variant={seciliSTAS === "Saptanmadı" ? "default" : "outline"}
                          onClick={() => setSTAS("Saptanmadı")}
                          className="flex-1"
                        >
                          Saptanmadı
                        </Button>
                        <Button
                          variant={seciliSTAS === "Mevcut" ? "default" : "outline"}
                          onClick={() => setSTAS("Mevcut")}
                          className="flex-1"
                        >
                          Mevcut
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Visseral plevra invazyonu</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <Button
                          variant={seciliVisseralPlevra === "Saptanmadı" ? "default" : "outline"}
                          onClick={() => setVisseralPlevra("Saptanmadı")}
                          className="w-full"
                        >
                          Saptanmadı
                        </Button>
                        <Button
                          variant={seciliVisseralPlevra === "PL0, elastik tabaka sağlam" ? "default" : "outline"}
                          onClick={() => setVisseralPlevra("PL0, elastik tabaka sağlam")}
                          className="w-full"
                        >
                          PL0, elastik tabaka sağlam
                        </Button>
                        <Button
                          variant={
                            seciliVisseralPlevra === "PL1, elastik membran boyunca uzanım" ? "default" : "outline"
                          }
                          onClick={() => setVisseralPlevra("PL1, elastik membran boyunca uzanım")}
                          className="w-full"
                        >
                          PL1, elastik membran boyunca uzanım
                        </Button>
                        <Button
                          variant={
                            seciliVisseralPlevra === "PL2, visseral plevra yüzeyine uzanım" ? "default" : "outline"
                          }
                          onClick={() => setVisseralPlevra("PL2, visseral plevra yüzeyine uzanım")}
                          className="w-full"
                        >
                          PL2, visseral plevra yüzeyine uzanım
                        </Button>
                        <Button
                          variant={seciliVisseralPlevra === "Belirlenemiyor" ? "default" : "outline"}
                          onClick={() => setVisseralPlevra("Belirlenemiyor")}
                          className="w-full"
                        >
                          Belirlenemiyor
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Lenfovasküler ve/veya Vasküler İnvazyon</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <Button
                          variant={seciliLVI === "Saptanmadı" ? "default" : "outline"}
                          onClick={() => setLVI("Saptanmadı")}
                          className="w-full"
                        >
                          Saptanmadı
                        </Button>
                        <Button
                          variant={seciliLVI === "Mevcut" ? "default" : "outline"}
                          onClick={() => setLVI("Mevcut")}
                          className="w-full"
                        >
                          Mevcut
                        </Button>
                        <Button
                          variant={seciliLVI === "Mevcut, lenfatik" ? "default" : "outline"}
                          onClick={() => setLVI("Mevcut, lenfatik")}
                          className="w-full"
                        >
                          Mevcut, lenfatik
                        </Button>
                        <Button
                          variant={seciliLVI === "Mevcut, arteriyel" ? "default" : "outline"}
                          onClick={() => setLVI("Mevcut, arteriyel")}
                          className="w-full"
                        >
                          Mevcut, arteriyel
                        </Button>
                        <Button
                          variant={seciliLVI === "Mevcut, venöz" ? "default" : "outline"}
                          onClick={() => setLVI("Mevcut, venöz")}
                          className="w-full"
                        >
                          Mevcut, venöz
                        </Button>
                        <Button
                          variant={seciliLVI === "Belirlenemiyor" ? "default" : "outline"}
                          onClick={() => setLVI("Belirlenemiyor")}
                          className="w-full"
                        >
                          Belirlenemiyor
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tümör Uzanımı Tab */}
            <TabsContent value="uzanim" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-lg font-semibold mb-4">Tümör Uzanımı</h2>

                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-uygulanamaz"
                          checked={seciliTumorUzanimi.includes("  - Uygulanamaz")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Uygulanamaz")}
                        />
                        <Label htmlFor="uzanim-uygulanamaz">Uygulanamaz</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-komsu-yapilar"
                          checked={seciliTumorUzanimi.includes("  - Komşu yapılar mevcut ancak tutulum yok")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Komşu yapılar mevcut ancak tutulum yok")}
                        />
                        <Label htmlFor="uzanim-komsu-yapilar">Komşu yapılar mevcut ancak tutulum yok</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-komsu-lob"
                          checked={seciliTumorUzanimi.includes("  - Komşu akciğer lobu")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Komşu akciğer lobu")}
                        />
                        <Label htmlFor="uzanim-komsu-lob">Komşu akciğer lobu</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-parietal-plevra"
                          checked={seciliTumorUzanimi.includes("  - Parietal plevra")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Parietal plevra")}
                        />
                        <Label htmlFor="uzanim-parietal-plevra">Parietal plevra</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-gogus-duvari-fibroadipoz"
                          checked={seciliTumorUzanimi.includes("  - Göğüs duvarı, fibroadipoz doku")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Göğüs duvarı, fibroadipoz doku")}
                        />
                        <Label htmlFor="uzanim-gogus-duvari-fibroadipoz">Göğüs duvarı, fibroadipoz doku</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-gogus-duvari-iskelet-kasi"
                          checked={seciliTumorUzanimi.includes("  - Göğüs duvarı, iskelet kası")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Göğüs duvarı, iskelet kası")}
                        />
                        <Label htmlFor="uzanim-gogus-duvari-iskelet-kasi">Göğüs duvarı, iskelet kası</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-gogus-duvari-kaburga"
                          checked={seciliTumorUzanimi.includes("  - Göğüs duvarı, kaburga(lar)")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Göğüs duvarı, kaburga(lar)")}
                        />
                        <Label htmlFor="uzanim-gogus-duvari-kaburga">Göğüs duvarı, kaburga(lar)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-ana-bronkus"
                          checked={seciliTumorUzanimi.includes(
                            "  - Ana bronkus (karinaya kadar ancak karina dahil değil)",
                          )}
                          onCheckedChange={() =>
                            handleTumorUzanimiChange("  - Ana bronkus (karinaya kadar ancak karina dahil değil)")
                          }
                        />
                        <Label htmlFor="uzanim-ana-bronkus">Ana bronkus (karinaya kadar)</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-hiler-yumusak-doku"
                          checked={seciliTumorUzanimi.includes("  - Hiler yumuşak dokular")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Hiler yumuşak dokular")}
                        />
                        <Label htmlFor="uzanim-hiler-yumusak-doku">Hiler yumuşak dokular</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-frenik-sinir"
                          checked={seciliTumorUzanimi.includes("  - Frenik sinir")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Frenik sinir")}
                        />
                        <Label htmlFor="uzanim-frenik-sinir">Frenik sinir</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-parietal-perikard"
                          checked={seciliTumorUzanimi.includes("  - Parietal perikard")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Parietal perikard")}
                        />
                        <Label htmlFor="uzanim-parietal-perikard">Parietal perikard</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-visseral-perikard"
                          checked={seciliTumorUzanimi.includes("  - Visseral perikard (epikard)")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Visseral perikard (epikard)")}
                        />
                        <Label htmlFor="uzanim-visseral-perikard">Visseral perikard (epikard)</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-azigos-ven"
                          checked={seciliTumorUzanimi.includes("  - Azigos ven")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Azigos ven")}
                        />
                        <Label htmlFor="uzanim-azigos-ven">Azigos ven</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-diyafram"
                          checked={seciliTumorUzanimi.includes("  - Diyafram")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Diyafram")}
                        />
                        <Label htmlFor="uzanim-diyafram">Diyafram</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-kalp"
                          checked={seciliTumorUzanimi.includes("  - Kalp")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Kalp")}
                        />
                        <Label htmlFor="uzanim-kalp">Kalp</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-buyuk-damarlar"
                          checked={seciliTumorUzanimi.includes(
                            "  - Büyük damarlar (aorta, superior / inferior vena kava, intraperikardiyal pulmoner arterler / venler)",
                          )}
                          onCheckedChange={() =>
                            handleTumorUzanimiChange(
                              "  - Büyük damarlar (aorta, superior / inferior vena kava, intraperikardiyal pulmoner arterler / venler)",
                            )
                          }
                        />
                        <Label htmlFor="uzanim-buyuk-damarlar">Büyük damarlar</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-trakea"
                          checked={seciliTumorUzanimi.includes("  - Trakea")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Trakea")}
                        />
                        <Label htmlFor="uzanim-trakea">Trakea</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-karina"
                          checked={seciliTumorUzanimi.includes("  - Karina")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Karina")}
                        />
                        <Label htmlFor="uzanim-karina">Karina</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-ozofagus"
                          checked={seciliTumorUzanimi.includes("  - Özofagus")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Özofagus")}
                        />
                        <Label htmlFor="uzanim-ozofagus">Özofagus</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-vertebra-cismi"
                          checked={seciliTumorUzanimi.includes("  - Vertebra cismi")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Vertebra cismi")}
                        />
                        <Label htmlFor="uzanim-vertebra-cismi">Vertebra cismi</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-spinal-kanal"
                          checked={seciliTumorUzanimi.includes("  - Spinal kanal")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Spinal kanal")}
                        />
                        <Label htmlFor="uzanim-spinal-kanal">Spinal kanal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="uzanim-diger"
                          checked={seciliTumorUzanimi.includes("  - Diğer (belirtiniz):")}
                          onCheckedChange={() => handleTumorUzanimiChange("  - Diğer (belirtiniz):")}
                        />
                        <Label htmlFor="uzanim-diger">Diğer (belirtiniz)</Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-lg font-semibold mb-4">Tedavi Etkisi</h2>

                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant={seciliTedaviEtkisi === "Bilinen preoperatif tedavi yok" ? "default" : "outline"}
                        onClick={() => setTedaviEtkisi("Bilinen preoperatif tedavi yok")}
                        className="w-full"
                      >
                        Bilinen preoperatif tedavi yok
                      </Button>
                      <Button
                        variant={seciliTedaviEtkisi === "%10'dan fazla rezidüel canlı tümör" ? "default" : "outline"}
                        onClick={() => setTedaviEtkisi("%10'dan fazla rezidüel canlı tümör")}
                        className="w-full"
                      >
                        %10&apos;dan fazla rezidüel canlı tümör
                      </Button>
                      <Button
                        variant={seciliTedaviEtkisi === "%10 veya daha az rezidüel canlı tümör" ? "default" : "outline"}
                        onClick={() => setTedaviEtkisi("%10 veya daha az rezidüel canlı tümör")}
                        className="w-full"
                      >
                        %10 veya daha az rezidüel canlı tümör
                      </Button>
                      <Button
                        variant={seciliTedaviEtkisi === "Belirlenemiyor" ? "default" : "outline"}
                        onClick={() => setTedaviEtkisi("Belirlenemiyor")}
                        className="w-full"
                      >
                        Belirlenemiyor
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Rezeksiyon Sınırları Tab */}
            <TabsContent value="sinirlar" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-lg font-semibold mb-4">Rezeksiyon Sınırları</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Bronşiyal sınır</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="bronsiyal-uygulanamaz"
                            checked={seciliBronkiyalSinir.includes("  - Uygulanamaz")}
                            onCheckedChange={() => handleBronkiyalSinirChange("  - Uygulanamaz")}
                          />
                          <Label htmlFor="bronsiyal-uygulanamaz">Uygulanamaz</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="bronsiyal-degerlendirilemez"
                            checked={seciliBronkiyalSinir.includes("  - Değerlendirilemez")}
                            onCheckedChange={() => handleBronkiyalSinirChange("  - Değerlendirilemez")}
                          />
                          <Label htmlFor="bronsiyal-degerlendirilemez">Değerlendirilemez</Label>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="bronsiyal-invaziv-negatif"
                            checked={seciliBronkiyalSinir.includes("  - İnvaziv karsinomla tutulum yok")}
                            onCheckedChange={() => handleBronkiyalSinirChange("  - İnvaziv karsinomla tutulum yok")}
                          />
                          <Label htmlFor="bronsiyal-invaziv-negatif">İnvaziv karsinomla tutulum yok</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="bronsiyal-cis-negatif"
                            checked={seciliBronkiyalSinir.includes("  - Karsinoma in situ ile tutulum yok")}
                            onCheckedChange={() => handleBronkiyalSinirChange("  - Karsinoma in situ ile tutulum yok")}
                          />
                          <Label htmlFor="bronsiyal-cis-negatif">Karsinoma in situ ile tutulum yok</Label>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="bronsiyal-invaziv-pozitif"
                            checked={seciliBronkiyalSinir.includes("  - İnvaziv karsinomla tutulum var")}
                            onCheckedChange={() => handleBronkiyalSinirChange("  - İnvaziv karsinomla tutulum var")}
                          />
                          <Label htmlFor="bronsiyal-invaziv-pozitif">İnvaziv karsinomla tutulum var</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="bronsiyal-cis-pozitif"
                            checked={seciliBronkiyalSinir.includes("  - Karsinoma in situ ile tutulum var")}
                            onCheckedChange={() => handleBronkiyalSinirChange("  - Karsinoma in situ ile tutulum var")}
                          />
                          <Label htmlFor="bronsiyal-cis-pozitif">Karsinoma in situ ile tutulum var</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Vasküler sınır</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <Button
                          variant={seciliVaskulerSinir === "Uygulanamaz" ? "default" : "outline"}
                          onClick={() => setVaskulerSinir("Uygulanamaz")}
                          className="w-full"
                        >
                          Uygulanamaz
                        </Button>
                        <Button
                          variant={seciliVaskulerSinir === "Değerlendirilemez" ? "default" : "outline"}
                          onClick={() => setVaskulerSinir("Değerlendirilemez")}
                          className="w-full"
                        >
                          Değerlendirilemez
                        </Button>
                        <Button
                          variant={seciliVaskulerSinir === "Karsinomla tutulum yok" ? "default" : "outline"}
                          onClick={() => setVaskulerSinir("Karsinomla tutulum yok")}
                          className="w-full"
                        >
                          Karsinomla tutulum yok
                        </Button>
                        <Button
                          variant={seciliVaskulerSinir === "Karsinomla tutulum var" ? "default" : "outline"}
                          onClick={() => setVaskulerSinir("Karsinomla tutulum var")}
                          className="w-full"
                        >
                          Karsinomla tutulum var
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Parankimal sınır</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="parankimal-uygulanamaz"
                            checked={seciliParankimalSinir.includes("  - Uygulanamaz")}
                            onCheckedChange={() => handleParankimalSinirChange("  - Uygulanamaz")}
                          />
                          <Label htmlFor="parankimal-uygulanamaz">Uygulanamaz</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="parankimal-degerlendirilemez"
                            checked={seciliParankimalSinir.includes("  - Değerlendirilemez")}
                            onCheckedChange={() => handleParankimalSinirChange("  - Değerlendirilemez")}
                          />
                          <Label htmlFor="parankimal-degerlendirilemez">Değerlendirilemez</Label>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="parankimal-invaziv-negatif"
                            checked={seciliParankimalSinir.includes("  - İnvaziv karsinomla tutulum yok")}
                            onCheckedChange={() => handleParankimalSinirChange("  - İnvaziv karsinomla tutulum yok")}
                          />
                          <Label htmlFor="parankimal-invaziv-negatif">İnvaziv karsinomla tutulum yok</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="parankimal-lepidik-negatif"
                            checked={seciliParankimalSinir.includes(
                              "  - İnvaziv adenokarsinomun lepidik komponenti ile tutulum yok",
                            )}
                            onCheckedChange={() =>
                              handleParankimalSinirChange(
                                "  - İnvaziv adenokarsinomun lepidik komponenti ile tutulum yok",
                              )
                            }
                          />
                          <Label htmlFor="parankimal-lepidik-negatif">Lepidik komponent ile tutulum yok</Label>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="parankimal-ais-negatif"
                            checked={seciliParankimalSinir.includes("  - Adenokarsinom in situ ile tutulum yok")}
                            onCheckedChange={() =>
                              handleParankimalSinirChange("  - Adenokarsinom in situ ile tutulum yok")
                            }
                          />
                          <Label htmlFor="parankimal-ais-negatif">Adenokarsinom in situ ile tutulum yok</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="parankimal-invaziv-pozitif"
                            checked={seciliParankimalSinir.includes("  - İnvaziv karsinomla tutulum var")}
                            onCheckedChange={() => handleParankimalSinirChange("  - İnvaziv karsinomla tutulum var")}
                          />
                          <Label htmlFor="parankimal-invaziv-pozitif">İnvaziv karsinomla tutulum var</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Lenf Nodları Tab */}
            <TabsContent value="lenf" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-lg font-semibold mb-4">Lenf Nodları</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="lenfNoduSayisi">İncelenen bölgesel lenf nodu sayısı</Label>
                      <Input
                        id="lenfNoduSayisi"
                        name="lenfNoduSayisi"
                        value={formData.lenfNoduSayisi}
                        onChange={handleInputChange}
                        placeholder="İncelenen bölgesel lenf nodu sayısı..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tutulanLenfNoduSayisi">Tutulan lenf nodu sayısı</Label>
                      <Input
                        id="tutulanLenfNoduSayisi"
                        name="tutulanLenfNoduSayisi"
                        value={formData.tutulanLenfNoduSayisi}
                        onChange={handleInputChange}
                        placeholder="Tutulan lenf nodu sayısı..."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ekstranodal">Ekstranodal uzanım</Label>
                      <select
                        className="w-full p-2 border rounded-md"
                        value={seciliEkstranodal || ""}
                        onChange={(e) => setEkstranodal(e.target.value)}
                      >
                        <option value="">Seçiniz</option>
                        <option value="Mevcut">Mevcut</option>
                        <option value="Saptanmadı">Saptanmadı</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Evreleme Tab */}
            <TabsContent value="evreleme" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-lg font-semibold mb-4">Patolojik Evreleme (AJCC 9. Baskı)</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>TNM Tanımlayıcıları</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="tnm-m"
                            checked={seciliTNMTanimlayici.includes("m (multipl primer tümörler)")}
                            onCheckedChange={() => handleTNMTanimlayiciChange("m (multipl primer tümörler)")}
                          />
                          <Label htmlFor="tnm-m">m (multipl primer tümörler)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="tnm-r"
                            checked={seciliTNMTanimlayici.includes("r (rekürren)")}
                            onCheckedChange={() => handleTNMTanimlayiciChange("r (rekürren)")}
                          />
                          <Label htmlFor="tnm-r">r (rekürren)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="tnm-y"
                            checked={seciliTNMTanimlayici.includes("y (tedavi sonrası)")}
                            onCheckedChange={() => handleTNMTanimlayiciChange("y (tedavi sonrası)")}
                          />
                          <Label htmlFor="tnm-y">y (tedavi sonrası)</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Primer tümör (pT)</Label>
                      <select
                        className="w-full p-2 border rounded-md"
                        value={seciliPT || ""}
                        onChange={(e) => setPT(e.target.value)}
                      >
                        <option value="">Seçiniz</option>
                        <option value="pT not assigned (mevcut patolojik bilgilere dayanarak belirlenemiyor)">
                          pT not assigned (mevcut patolojik bilgilere dayanarak belirlenemiyor)
                        </option>
                        <option value="pT0: Primer tümör bulgusu yok">pT0: Primer tümör bulgusu yok</option>
                        <option value="pTis: Karsinoma in situ; veya Skuamöz hücreli karsinoma in situ (SCIS); veya Adenokarsinoma in situ (AIS): saf lepidik paternli adenokarsinom, en büyük boyutu 3 cm veya daha az">
                          pTis: Karsinoma in situ; veya Skuamöz hücreli karsinoma in situ (SCIS); veya Adenokarsinoma in
                          situ (AIS): saf lepidik paternli adenokarsinom, en büyük boyutu 3 cm veya daha az
                        </option>
                        <option value="pT1 (alt grup belirlenemiyor)">pT1 (alt grup belirlenemiyor)</option>
                        <option value="pT1mi: Minimal invaziv adenokarsinom: predominant lepidik paternli adenokarsinom (en büyük boyutu 3 cm veya daha az) ve 5 mm veya daha az invazyon">
                          pT1mi: Minimal invaziv adenokarsinom: predominant lepidik paternli adenokarsinom (en büyük
                          boyutu 3 cm veya daha az) ve 5 mm veya daha az invazyon
                        </option>
                        <option value="pT1a: En büyük boyutu 1 cm veya daha az olan tümör VEYA İnvaziv komponenti bronşiyal duvarla sınırlı olan ve ana bronşa proksimal olarak uzanabilen herhangi bir boyuttaki tümör">
                          pT1a: En büyük boyutu 1 cm veya daha az olan tümör VEYA İnvaziv komponenti bronşiyal duvarla
                          sınırlı olan ve ana bronşa proksimal olarak uzanabilen herhangi bir boyuttaki tümör
                        </option>
                        <option value="pT1b: En büyük boyutu 1 cm'den büyük ancak 2 cm veya daha az olan tümör">
                          pT1b: En büyük boyutu 1 cm'den büyük ancak 2 cm veya daha az olan tümör
                        </option>
                        <option value="pT1c: En büyük boyutu 2 cm'den büyük ancak 3 cm veya daha az olan tümör">
                          pT1c: En büyük boyutu 2 cm'den büyük ancak 3 cm veya daha az olan tümör
                        </option>
                        <option value="pT2 (alt grup belirlenemiyor)">pT2 (alt grup belirlenemiyor)</option>
                        <option value="pT2a: En büyük boyutu 3 cm'den büyük ancak 4 cm veya daha az olan tümör VEYA aşağıdaki özelliklerden bir veya daha fazlasına sahip, en büyük boyutu 4 cm veya daha az olan tümör: Visseral plevrayı invaze eder; veya Komşu lobu invaze eder; veya Ana bronşu (karinaya kadar ancak karina dahil değil) tutar veya hiler bölgelere uzanan atelektazi veya obstrüktif pnömonitle ilişkilidir">
                          pT2a: En büyük boyutu 3 cm'den büyük ancak 4 cm veya daha az olan tümör VEYA aşağıdaki
                          özelliklerden bir veya daha fazlasına sahip, en büyük boyutu 4 cm veya daha az olan tümör:
                          Visseral plevrayı invaze eder; veya Komşu lobu invaze eder; veya Ana bronşu (karinaya kadar
                          ancak karina dahil değil) tutar
                        </option>
                        <option value="pT2b: En büyük boyutu 4 cm'den büyük ancak 5 cm veya daha az olan tümör">
                          pT2b: En büyük boyutu 4 cm'den büyük ancak 5 cm veya daha az olan tümör
                        </option>
                        <option value="pT3: En büyük boyutu 5 cm'den büyük ancak 7 cm veya daha az olan tümör VEYA aşağıdaki özelliklerden bir veya daha fazlasına sahip, en büyük boyutu 7 cm veya daha az olan tümör: Parietal plevra veya göğüs duvarını invaze eder; veya Perikardı, frenik siniri veya azigos venini invaze eder; veya Aynı lobda ayrı tümör nodülü/nodülleri">
                          pT3: En büyük boyutu 5 cm'den büyük ancak 7 cm veya daha az olan tümör VEYA aşağıdaki
                          özelliklerden bir veya daha fazlasına sahip, en büyük boyutu 7 cm veya daha az olan tümör:
                          Parietal plevra veya göğüs duvarını invaze eder; veya Perikardı, frenik siniri veya azigos
                          venini invaze eder; veya Aynı lobda ayrı tümör nodülü/nodülleri
                        </option>
                        <option value="pT4: En büyük boyutu 7 cm'den büyük olan tümör VEYA aşağıdaki özelliklerden bir veya daha fazlasına sahip herhangi bir boyuttaki tümör: Mediasteni, diyaframı, kalbi, büyük damarları, trakeayı, rekürren laringeal siniri, özofagusu, vertebra cismini veya karinayı invaze eder; veya Farklı ipsilateral lobda ayrı tümör nodülü/nodülleri">
                          pT4: En büyük boyutu 7 cm'den büyük olan tümör VEYA aşağıdaki özelliklerden bir veya daha
                          fazlasına sahip herhangi bir boyuttaki tümör: Mediasteni, diyaframı, kalbi, büyük damarları,
                          trakeayı, rekürren laringeal siniri, özofagusu, vertebra cismini veya karinayı invaze eder;
                          veya Farklı ipsilateral lobda ayrı tümör nodülü/nodülleri
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label>Bölgesel lenf nodları (pN)</Label>
                      <select
                        className="w-full p-2 border rounded-md"
                        value={seciliPN || ""}
                        onChange={(e) => setPN(e.target.value)}
                      >
                        <option value="">Seçiniz</option>
                        <option value="pN not assigned (lenf nodu gönderilmemiş veya bulunamıyor)">
                          pN not assigned (lenf nodu gönderilmemiş veya bulunamıyor)
                        </option>
                        <option value="pN not assigned (mevcut patolojik bilgilere dayanarak belirlenemiyor)">
                          pN not assigned (mevcut patolojik bilgilere dayanarak belirlenemiyor)
                        </option>
                        <option value="pN0: Bölgesel lenf nodu tutulumu yok">
                          pN0: Bölgesel lenf nodu tutulumu yok
                        </option>
                        <option value="pN1: İpsilateral peribronşiyal ve/veya ipsilateral hiler ve/veya intrapulmoner lenf nodu istasyonlarının tümör tutulumu, direkt uzanım dahil">
                          pN1: İpsilateral peribronşiyal ve/veya ipsilateral hiler ve/veya intrapulmoner lenf nodu
                          istasyonlarının tümör tutulumu, direkt uzanım dahil
                        </option>
                        <option value="pN2 (alt grup belirlenemiyor)">pN2 (alt grup belirlenemiyor)</option>
                        <option value="pN2a: Tek bir ipsilateral mediastinal nodal istasyon veya subkarinal nodal istasyonun tümör tutulumu">
                          pN2a: Tek bir ipsilateral mediastinal nodal istasyon veya subkarinal nodal istasyonun tümör
                          tutulumu
                        </option>
                        <option value="pN2b: Subkarinal nodal istasyon tutulumu olsun veya olmasın, çoklu ipsilateral mediastinal nodal istasyonların tümör tutulumu">
                          pN2b: Subkarinal nodal istasyon tutulumu olsun veya olmasın, çoklu ipsilateral mediastinal
                          nodal istasyonların tümör tutulumu
                        </option>
                        <option value="pN3: Kontralateral mediastinal, kontralateral hiler, ipsilateral/kontralateral skalen veya ipsilateral/kontralateral supraklaviküler lenf nodu istasyonlarının tümör tutulumu">
                          pN3: Kontralateral mediastinal, kontralateral hiler, ipsilateral/kontralateral skalen veya
                          ipsilateral/kontralateral supraklaviküler lenf nodu istasyonlarının tümör tutulumu
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label>Uzak metastaz (pM)</Label>
                      <select
                        className="w-full p-2 border rounded-md"
                        value={seciliPM || ""}
                        onChange={(e) => setPM(e.target.value)}
                      >
                        <option value="">Seçiniz</option>
                        <option value="Not applicable - pM gönderilen örneklerden belirlenemiyor">
                          Not applicable - pM gönderilen örneklerden belirlenemiyor
                        </option>
                        <option value="pM1 (alt grup belirlenemiyor)">pM1 (alt grup belirlenemiyor)</option>
                        <option value="pM1: Uzak metastaz">pM1: Uzak metastaz</option>
                        <option value="pM1a: Plevral veya perikardiyal nodüllerde metastaz ve/veya malign plevral veya perikardiyal efüzyon ve/veya kontralateral lobda ayrı tümör nodülü/nodülleri">
                          pM1a: Plevral veya perikardiyal nodüllerde metastaz ve/veya malign plevral veya perikardiyal
                          efüzyon ve/veya kontralateral lobda ayrı tümör nodülü/nodülleri
                        </option>
                        <option value="pM1b: Tek bir ekstrapulmoner organda tek metastaz (tek bir non-bölgesel lenf nodu tutulumu dahil)">
                          pM1b: Tek bir ekstrapulmoner organda tek metastaz (tek bir non-bölgesel lenf nodu tutulumu
                          dahil)
                        </option>
                        <option value="pM1c (alt grup belirlenemiyor)">pM1c (alt grup belirlenemiyor)</option>
                        <option value="pM1c1: Tek bir organda çoklu ekstrapulmoner metastaz">
                          pM1c1: Tek bir organda çoklu ekstrapulmoner metastaz
                        </option>
                        <option value="pM1c2: Çoklu organda çoklu ekstrapulmoner metastaz">
                          pM1c2: Çoklu organda çoklu ekstrapulmoner metastaz
                        </option>
                      </select>
                    </div>

                    {/* Patolojik Evre Gösterimi */}
                    {(seciliPT || seciliPN || seciliPM) && (
                      <div className="p-4 bg-muted rounded-md mt-4">
                        <p className="font-medium">Patolojik Evre (pTNM, AJCC 9. Baskı):</p>
                        <p className="text-lg font-bold">
                          {seciliTNMTanimlayici.length > 0 ? seciliTNMTanimlayici.map((t) => t.charAt(0)).join("") : ""}
                          {seciliPT ? seciliPT.split(":")[0] : ""}
                          {seciliPN ? seciliPN.split(":")[0] : ""}
                          {seciliPM && seciliPM !== "Not applicable - pM gönderilen örneklerden belirlenemiyor"
                            ? seciliPM.split(":")[0]
                            : ""}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-lg font-semibold mb-4">Ek Patolojik Bulgular</h2>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="ek-bulgu-aah"
                          checked={seciliEkBulgular.includes("Atipik adenomatöz hiperplazi")}
                          onCheckedChange={() => handleEkBulgularChange("Atipik adenomatöz hiperplazi")}
                        />
                        <Label htmlFor="ek-bulgu-aah">Atipik adenomatöz hiperplazi</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="ek-bulgu-tumorlet"
                          checked={seciliEkBulgular.includes("Tümörletler")}
                          onCheckedChange={() => handleEkBulgularChange("Tümörletler")}
                        />
                        <Label htmlFor="ek-bulgu-tumorlet">Tümörletler</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="ek-bulgu-skuamoz-displazi"
                          checked={seciliEkBulgular.includes("Skuamöz displazi")}
                          onCheckedChange={() => handleEkBulgularChange("Skuamöz displazi")}
                        />
                        <Label htmlFor="ek-bulgu-skuamoz-displazi">Skuamöz displazi</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="ek-bulgu-ne-hiperplazi"
                          checked={seciliEkBulgular.includes("Diffüz nöroendokrin hiperplazi")}
                          onCheckedChange={() => handleEkBulgularChange("Diffüz nöroendokrin hiperplazi")}
                        />
                        <Label htmlFor="ek-bulgu-ne-hiperplazi">Diffüz nöroendokrin hiperplazi</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="ek-bulgu-biyopsi-degisiklikleri"
                          checked={seciliEkBulgular.includes("Biyopsi yeri değişiklikleri")}
                          onCheckedChange={() => handleEkBulgularChange("Biyopsi yeri değişiklikleri")}
                        />
                        <Label htmlFor="ek-bulgu-biyopsi-degisiklikleri">Biyopsi yeri değişiklikleri</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="ek-bulgu-granulom-nekrotizan"
                          checked={seciliEkBulgular.includes("Granülomatöz inflamasyon, nekrotizan")}
                          onCheckedChange={() => handleEkBulgularChange("Granülomatöz inflamasyon, nekrotizan")}
                        />
                        <Label htmlFor="ek-bulgu-granulom-nekrotizan">Granülomatöz inflamasyon, nekrotizan</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="ek-bulgu-granulom-non-nekrotizan"
                          checked={seciliEkBulgular.includes("Granülomatöz inflamasyon, non-nekrotizan")}
                          onCheckedChange={() => handleEkBulgularChange("Granülomatöz inflamasyon, non-nekrotizan")}
                        />
                        <Label htmlFor="ek-bulgu-granulom-non-nekrotizan">
                          Granülomatöz inflamasyon, non-nekrotizan
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="ek-bulgu-post-obstruktif"
                          checked={seciliEkBulgular.includes("Post-obstrüktif değişiklikler")}
                          onCheckedChange={() => handleEkBulgularChange("Post-obstrüktif değişiklikler")}
                        />
                        <Label htmlFor="ek-bulgu-post-obstruktif">Post-obstrüktif değişiklikler</Label>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="ek-bulgu-fibrozis"
                          checked={seciliEkBulgular.includes("Fibrozis")}
                          onCheckedChange={() => handleEkBulgularChange("Fibrozis")}
                        />
                        <Label htmlFor="ek-bulgu-fibrozis">Fibrozis</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="ek-bulgu-amfizem"
                          checked={seciliEkBulgular.includes("Amfizem")}
                          onCheckedChange={() => handleEkBulgularChange("Amfizem")}
                        />
                        <Label htmlFor="ek-bulgu-amfizem">Amfizem</Label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="digerEkBulgular">Diğer (belirtiniz)</Label>
                      <Input
                        id="digerEkBulgular"
                        name="digerEkBulgular"
                        value={formData.digerEkBulgular}
                        onChange={handleInputChange}
                        placeholder="Diğer ek bulgular..."
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="ekNotlar">Ek Notlar</Label>
                    <Textarea
                      id="ekNotlar"
                      name="ekNotlar"
                      value={formData.ekNotlar}
                      onChange={handleInputChange}
                      placeholder="Ek notlar..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sağ Sütun - Rapor Alanı */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-4">Rapor</h2>

              <ScrollArea className="h-[400px]">
                <pre className="text-sm whitespace-pre-wrap">{generateRaporMetni()}</pre>
              </ScrollArea>

              <div className="flex justify-end">
                <Button onClick={kopyalaRapor} className="mt-4">
                  {kopyalandi ? (
                    <span className="flex items-center space-x-2">
                      Kopyalandı <Check className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="flex items-center space-x-2">
                      Raporu Kopyala <Copy className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
