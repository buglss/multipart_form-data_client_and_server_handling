# [TR]

# Kurulum

**npm** paketlerinin ``package.json`` dosyasından okunarak kurulması için ``npm i`` komutu çalıştırılır.

``<ÇALIŞMA_DİZİNİ>``

```bash
npm i
```

# Başlatma

### Seçenek 1

VSCode "**Run and Debug**" panelinden hazırda olan "**Run Server**" konfigürasyonu kullanılarak başlatılabilir.

### Seçenek 2

Alternatif olarak eğer haricinde bir editör kullanılacaksa proje dizini içerisinde ``node index.js`` komutu çalıştırılarak da başlatılabilir.

``<ÇALIŞMA_DİZİNİ>``

```bash
node index.js
```

# Kısaca

``express`` npm paketi kullanılarak http server oluşturulmuştur. Sunucu tarafında request işlemi için ``axios`` paketi kullanılmıştır.

Herhangi bir ui kütüphanesi veya css ve javascript dosyası eklemeden basit bir html sayfası oluşturulmuştur.

html form elemanından ``/dock`` web servisine **multipart/form-data** tipinde içinde dosyalarında olduğu bir post işlemi yapılmaktadır. Bu işlem multipart/form-data tipinde içerik bekleyen web servis kullanımına örnektir.

/dock web servisinde ise formdan gelen dosya ve diğer bilgilerin ayrıştırılması işlemi yapılmıştır. Bu işlem multipart/form-data tipinde veri bekleyen web servisin kendisine gelen request'i nasıl karşılaması gerektiğinin örneğidir. (ayrıştırma/parse için express-fileupload paketi kullanılmıştır)

Bir proxy gibi davranıp html formdan /doc web servisine iletilen bilgiler ayrıştırılıp yeniden multipart/form-data tipinde toparlanıp ``http://buglss.github.io/XXX`` web servisine post işlemi yapılmıştır. Bu işlem sunucu tarafında multipart/form-data tipinde veri hazırlanmasının ve bu tipte veri bekleyen web servisine gönderilmesinin bir örneğidir.

# [EN]

# Setup

The ``npm i`` command is run to install **npm** packages by reading from the ``package.json`` file.

``<WORKING_DIR>``

``bash
npm i
```

# Start

### Option 1

It can be started from the VSCode "**Run and Debug**" panel using the existing "**Run Server**" configuration.

### Option 2

Alternatively, if a different editor is to be used, it can be started by running the ``node index.js`` command in the project directory.

``<WORKING_DIR>``

``bash
node index.js
```

# Summary

http server was created using ``express`` npm package. The ``axios`` package is used for the request process on the server side.

A simple html page is created without adding any ui libraries or css and javascript files.

A post operation is performed from the html form element to the ``/dock`` web service in **multipart/form-data** type, including its files. This is an example of using a web service that expects multipart/form-data content.

In the /dock web service, the file and other information coming from the form are parsed. This process is an example of how the web service, which is waiting for data of multipart/form-data type, should meet the request that comes to it. (express-fileupload package is used for parse/parse)

Acting as a proxy, the information transmitted from the html form to the /doc web service was parsed, gathered again in multipart/form-data type, and posted to the ``http://buglss.github.io/XXX`` web service. This process is an example of preparing multipart/form-data type data on the server side and sending this type of data to the pending web service.