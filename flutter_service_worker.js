'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ef6fd3029877b54913ad5e11704b7855",
"assets/assets/fonts/DMSans-Medium.ttf": "ce4378bf556833491a228d830e78ff37",
"assets/assets/fonts/DMSans-Regular.ttf": "c33470e5f673d702d0ed59d52aba855c",
"assets/assets/icons/account.png": "fb132761f7e683311039dcabbf3321d4",
"assets/assets/icons/account2.png": "a195a7e5ef96e94811df31d0d210db82",
"assets/assets/icons/apple.png": "fe0caac367fb24a4e23773af4ce3f7d4",
"assets/assets/icons/bell.png": "436ef74d96c18051db997b045bb7b45e",
"assets/assets/icons/bin.png": "3aeef352dbb9e274100705128bd4c571",
"assets/assets/icons/cart-flip-w.png": "2f74ed58b64a2bc315859c8bd2506058",
"assets/assets/icons/cart-flip.png": "0add97faafb0ac54481663d72b5dce4a",
"assets/assets/icons/cart-w.png": "789b79a821bdd44d9dd4ea558c139039",
"assets/assets/icons/cart.png": "c8df12711ff5d82ad5cfa77ddf0cacb7",
"assets/assets/icons/chat.png": "2d29cba9302f2d481e7dbeae032af3db",
"assets/assets/icons/chatBottom.png": "3113e4c5db95ba8a036fcea26a4aee14",
"assets/assets/icons/compare.png": "1070412916ef9f96c31782ac7e60bfee",
"assets/assets/icons/countries/ad.png": "6fd941cc28086bc94c20d49626e7d382",
"assets/assets/icons/countries/ae.png": "b18096b0e4d0a132ab1f5c9a77fc1596",
"assets/assets/icons/countries/af.png": "adfdf32bf024c220ce257c889f7fe84e",
"assets/assets/icons/countries/ag.png": "faa612ba6a6e1905fb62512686ab0790",
"assets/assets/icons/countries/ai.png": "4c54e9cd5ca07ce7d3f3180a2c42c837",
"assets/assets/icons/countries/al.png": "4b2a32e4ce23f7f8384ea41ccbea8eac",
"assets/assets/icons/countries/am.png": "213d180fd4301a0972d168d1ac7c23d9",
"assets/assets/icons/countries/ao.png": "d78ad2bc6cdd835223fd07823f95367e",
"assets/assets/icons/countries/aq.png": "a55f8ea5cbab18a01f752700c211b8d4",
"assets/assets/icons/countries/ar.png": "c4d5f2a8cff79c371eaa538f9b8ab489",
"assets/assets/icons/countries/as.png": "175d28cefa09a0070962360ae395a209",
"assets/assets/icons/countries/at.png": "ce8e0c477fe9cbb34be292079a9f70d1",
"assets/assets/icons/countries/au.png": "338ec5d2d3fc1a1befb585a64303b108",
"assets/assets/icons/countries/aw.png": "4b6600963c60d583baf2e75765b7901a",
"assets/assets/icons/countries/ax.png": "5e5e8b7b8f497746b937159b982e85bb",
"assets/assets/icons/countries/az.png": "641337efc978c2864996f65bbe92faeb",
"assets/assets/icons/countries/ba.png": "806548f1663b40b28513905b5467989c",
"assets/assets/icons/countries/bb.png": "93a279ff8fcf7a896676275d401ec894",
"assets/assets/icons/countries/bd.png": "d2b2ca92ebbf5173cef28659e97b4f6d",
"assets/assets/icons/countries/be.png": "9f0f143cd02afd2ba6c813bec459798c",
"assets/assets/icons/countries/bf.png": "85078aef2528582a5b67d02c3b832838",
"assets/assets/icons/countries/bg.png": "c35780bd37d842f7310318c3095b5b7e",
"assets/assets/icons/countries/bh.png": "bdc972da0f63943baf92116561bf4a8f",
"assets/assets/icons/countries/bi.png": "1499027e75fddc046d6e1d9c31af9574",
"assets/assets/icons/countries/bj.png": "4ce7dbd7852299f425edbc514b7163a8",
"assets/assets/icons/countries/bl.png": "2c701492caba3b77e4038e360a00756a",
"assets/assets/icons/countries/bm.png": "001c5842a488ee4c177044009049cb5a",
"assets/assets/icons/countries/bn.png": "bc1b15d6c903785d64045074df80edd3",
"assets/assets/icons/countries/bo.png": "1456eaa8918ba06e5fb27feb5f3898dc",
"assets/assets/icons/countries/bq.png": "ceb2c444c410dc9ac8dc8be80bccebb8",
"assets/assets/icons/countries/br.png": "cc194a65114dc8934e01dee10bf146fd",
"assets/assets/icons/countries/bs.png": "87e24cbda7c1c45b6ca69b66ac8ef6e9",
"assets/assets/icons/countries/bt.png": "c8ce631f36dec649931f2a73daa82776",
"assets/assets/icons/countries/bv.png": "f01ae44d7a0a820cf8a296d7ab89fb31",
"assets/assets/icons/countries/bw.png": "0a45f881a61c8d2cd3228fa0700d6f4f",
"assets/assets/icons/countries/by.png": "0bb98aaf84d0aaff9be860bf39450cf6",
"assets/assets/icons/countries/bz.png": "2d53e9b90f127305eb1e79e6d8fd84e5",
"assets/assets/icons/countries/ca.png": "dd1c49ca4ff9759dd3b5e417454ad2d6",
"assets/assets/icons/countries/cc.png": "7d24984de968bc17a9fe8f0584210eb6",
"assets/assets/icons/countries/cd.png": "527bb857b4b2acd6de5d87b5201bb970",
"assets/assets/icons/countries/cf.png": "fc7480b84444e3ef669eefe42181dab9",
"assets/assets/icons/countries/cg.png": "3b807c0c86ef0c5ceaa932f5efe8bad0",
"assets/assets/icons/countries/ch.png": "567eecef35461aa5ce49a9120d10ef9f",
"assets/assets/icons/countries/ci.png": "0dcb58ef4ce10651a64b351957f4e76c",
"assets/assets/icons/countries/ck.png": "54ef1eae7e52218da2574b4cfdc67d58",
"assets/assets/icons/countries/cl.png": "ac7f3e5d68a769350e6e41ed6940574c",
"assets/assets/icons/countries/cm.png": "baf2c068e0e8211a499b04f02d572b6f",
"assets/assets/icons/countries/cn.png": "b2f0102a46c01c3cfa1cf6bec8a0d894",
"assets/assets/icons/countries/co.png": "42423a8c2f40f9600c0a800619fb1f97",
"assets/assets/icons/countries/cr.png": "eedeeaede52e487515f95ff4b5401b19",
"assets/assets/icons/countries/cu.png": "b87e64db8fdee1c18aa20920a7907d2a",
"assets/assets/icons/countries/cv.png": "cc5e8dc78c2c4c9ab10cc84c6088d401",
"assets/assets/icons/countries/cw.png": "73fe3a00668a60870ce2613d1c2d2483",
"assets/assets/icons/countries/cx.png": "084c3a4204bdbb4ba2c7dcc7c5169056",
"assets/assets/icons/countries/cy.png": "159b257e2fec1a4212f92278d93e3188",
"assets/assets/icons/countries/cz.png": "4ed9419e9b6638ee2e8d5270fae87eec",
"assets/assets/icons/countries/de.png": "0f5243f1c5a973ff92a7020f16b34a87",
"assets/assets/icons/countries/dj.png": "6ccd830b739882c513fa2e73bdcb16b3",
"assets/assets/icons/countries/dk.png": "76fcf2696770beeff6b2f6014982ac75",
"assets/assets/icons/countries/dm.png": "deb7c06cc5c7360cfe63e984ff7fe7a9",
"assets/assets/icons/countries/do.png": "c7555762c35060f5b5430dc471c3b0bb",
"assets/assets/icons/countries/dz.png": "23f0e26b43461e095f23db87fc6ba73e",
"assets/assets/icons/countries/ec.png": "aabf4f60941a667696a4c116232defe7",
"assets/assets/icons/countries/ee.png": "d1791526470a1a570bbc6b84d7eb8a28",
"assets/assets/icons/countries/eg.png": "7956e4638d8fe52cd2e020731b8d1764",
"assets/assets/icons/countries/eh.png": "b5984011658f774dbcc222c5625816a8",
"assets/assets/icons/countries/er.png": "4ce0e42b9731a05bee5b803761fe3e44",
"assets/assets/icons/countries/es-ct.png": "187723d72bf8dc7d8e4d1bf9c5379836",
"assets/assets/icons/countries/es-ga.png": "f51f0ade45911df77afe2cb9c1150db0",
"assets/assets/icons/countries/es.png": "5a410c58b395e4b1b8dfafbbde04fd2d",
"assets/assets/icons/countries/et.png": "2c2ed6c2c88c65f67302cd51906a09c0",
"assets/assets/icons/countries/eu.png": "6ad5fb0b78582a87e57caae69a4c67c5",
"assets/assets/icons/countries/fi.png": "ecbb9fbb7c487f1402c09af434a3f477",
"assets/assets/icons/countries/fj.png": "0def3fe7fe2afb7fd762abf6d02cd276",
"assets/assets/icons/countries/fk.png": "c1c469fd576d5fedda4eb4d6d5dc2e2e",
"assets/assets/icons/countries/fm.png": "56d48af0bf035ffbc5be784651c139a8",
"assets/assets/icons/countries/fo.png": "05dcf048b9cd649d6002176345756166",
"assets/assets/icons/countries/fr.png": "bdd70739ff8b2de6963be48ff93f7a4b",
"assets/assets/icons/countries/ga.png": "c8aa65c9b778959fc0c81a925e7624f5",
"assets/assets/icons/countries/gb-eng.png": "26221896bc110816f020ce2e75cb37fe",
"assets/assets/icons/countries/gb-nir.png": "0442f0c6dbaf938e898e0ced4a2be506",
"assets/assets/icons/countries/gb-sct.png": "30f9e2cd0ca983faf17ecacd521deecd",
"assets/assets/icons/countries/gb-wls.png": "9702961c0cfebd8c9d06643527d6bca7",
"assets/assets/icons/countries/gb.png": "5320025d7612b10337d65c2296f1b2dc",
"assets/assets/icons/countries/gd.png": "7adedf8510459a0cad7bf67c32755310",
"assets/assets/icons/countries/ge.png": "bed1135c9a760799e97ad6572535db88",
"assets/assets/icons/countries/gf.png": "6ea58dcc318ee33b8bbfbbe2c0828981",
"assets/assets/icons/countries/gg.png": "9fcc5de87425069835a0245d55aeec9c",
"assets/assets/icons/countries/gh.png": "036e3f3a9ab690403b04b8272638407e",
"assets/assets/icons/countries/gi.png": "37546a01ff89c370704aa52ab9edacff",
"assets/assets/icons/countries/gl.png": "3fbc6c01ba8c2f299e19cb2695f060fd",
"assets/assets/icons/countries/gm.png": "1dec801f0db8037ea7f759fc51c738a6",
"assets/assets/icons/countries/gn.png": "f8767cacd417b816a7b2a780ef1f677d",
"assets/assets/icons/countries/gp.png": "6ea58dcc318ee33b8bbfbbe2c0828981",
"assets/assets/icons/countries/gq.png": "3386a570aa5e6b9e99a505669aba2024",
"assets/assets/icons/countries/gr.png": "b690527cc3a0dcb9ed57334d3bf66b59",
"assets/assets/icons/countries/gs.png": "a795afd6db0a183515e22403638a9ccf",
"assets/assets/icons/countries/gt.png": "45574bab10a7fff60253ee799e368261",
"assets/assets/icons/countries/gu.png": "17a6380c143221e46601b36b4f393f68",
"assets/assets/icons/countries/gw.png": "d5de9604a8b42c68d70d076837d4a436",
"assets/assets/icons/countries/gy.png": "4b34aed28b636a15db27f2c9a9298176",
"assets/assets/icons/countries/hk.png": "c2b7836e8ddc65599d6751a7b4ca8143",
"assets/assets/icons/countries/hm.png": "45ddf67baf2249f494cd3df5bcc35e4b",
"assets/assets/icons/countries/hn.png": "53fc19bae3d9c914bef3284f8e4d86fb",
"assets/assets/icons/countries/hr.png": "8d24b16802f4b3254df90902183faf0c",
"assets/assets/icons/countries/ht.png": "10f3ff04f9f254148da875f917fde16a",
"assets/assets/icons/countries/hu.png": "cc8d63dd791e70c7e421729f1c36e5d4",
"assets/assets/icons/countries/id.png": "e84bc0c653d440d45f9b682f822ef32c",
"assets/assets/icons/countries/ie.png": "a567e6578849db483fe9fe9e4d9b250c",
"assets/assets/icons/countries/il.png": "5e27985a67e1a2620ec4a588414220fc",
"assets/assets/icons/countries/im.png": "4b585f076119b6c664059442a71f7113",
"assets/assets/icons/countries/in.png": "8667915a6da7f688235e576aada850b3",
"assets/assets/icons/countries/io.png": "1f11c24480d0250d25335508d0e91ebe",
"assets/assets/icons/countries/iq.png": "7b041228408be6b810e08610ae2bac2a",
"assets/assets/icons/countries/ir.png": "5ea83129638d4aa6c4f9521ed22d2ba1",
"assets/assets/icons/countries/is.png": "b340b6ef1084970a274d32f25b7e55dd",
"assets/assets/icons/countries/it.png": "7977dad993626b8ed8e5ff18e8c17f55",
"assets/assets/icons/countries/je.png": "58586cad00f59822b5831d8a2acbd186",
"assets/assets/icons/countries/jm.png": "44fd8e337590cef71fb75c2b82c072c9",
"assets/assets/icons/countries/jo.png": "583f58ec910690e82ae9f14f4f12d94e",
"assets/assets/icons/countries/jp.png": "5147459991358b4a77155f3f71c1568e",
"assets/assets/icons/countries/ke.png": "23701762777f0efad7da63b71df7183c",
"assets/assets/icons/countries/kg.png": "13d126d5ccf02cbc2725b57fd018cf1e",
"assets/assets/icons/countries/kh.png": "3e52d8564bcd26e3eecf01f9e77836dc",
"assets/assets/icons/countries/ki.png": "39435c8818e923f1e56684e1ceb529ef",
"assets/assets/icons/countries/km.png": "113b554d5b52d263199bc210685e1d4e",
"assets/assets/icons/countries/kn.png": "fb83884f6d6d7ff7e500d28b54fc6bda",
"assets/assets/icons/countries/kp.png": "d8be5344293fbee177088f09ef6e31b1",
"assets/assets/icons/countries/kr.png": "e6ee0e9a47151972771ddffbedf957db",
"assets/assets/icons/countries/kw.png": "6d30ee8e2a1bff6b31b12099f2dcbc94",
"assets/assets/icons/countries/ky.png": "28b9273299eb4a4fe4758755bfd51d2f",
"assets/assets/icons/countries/kz.png": "91aa694da0f7a9107bcb2e01931cd2d3",
"assets/assets/icons/countries/la.png": "b08d9161b95397adbd4eb1f0c386779a",
"assets/assets/icons/countries/lb.png": "5d4a1792ef3b0c3153cbd6d601975450",
"assets/assets/icons/countries/lc.png": "bdc834dfe61a7a12ea4977b6b4e0a683",
"assets/assets/icons/countries/li.png": "36639ee8c5a88ae5e8124051e288c365",
"assets/assets/icons/countries/lk.png": "92c46ce06f7570a231bf8c4ec4a545ba",
"assets/assets/icons/countries/lr.png": "1bbaf8c3997612c1801bcbf7aa0b6236",
"assets/assets/icons/countries/ls.png": "a092ed2505e20889cefe88f1c1374a70",
"assets/assets/icons/countries/lt.png": "f913a6dc201691c9604b5f33a5d3dca6",
"assets/assets/icons/countries/lu.png": "b65a4564a8f6011b986634f7fdf8d5d2",
"assets/assets/icons/countries/lv.png": "e5060c1e76c856cf4013ae8118e62a78",
"assets/assets/icons/countries/ly.png": "3f9bfbbf43f281c49df9d1474d8f046d",
"assets/assets/icons/countries/ma.png": "50bfef2e26e29cbbd89d75388e4ba565",
"assets/assets/icons/countries/mc.png": "c1c4c80c93dddea945d0d37496352ce6",
"assets/assets/icons/countries/md.png": "9f47c3f56de74e8e9657dc24d0207d91",
"assets/assets/icons/countries/me.png": "621f9aa63a5c3f863d8f40847bbdf0ad",
"assets/assets/icons/countries/mf.png": "bdd70739ff8b2de6963be48ff93f7a4b",
"assets/assets/icons/countries/mg.png": "f46659bc9850a0cba5a5094ed2d99f08",
"assets/assets/icons/countries/mh.png": "d2cbfe5b7d908271ed636da1ddaeca1a",
"assets/assets/icons/countries/mk.png": "a87ff82a61a3114c5e22ba3b83543599",
"assets/assets/icons/countries/ml.png": "0ef455ec8ae38440028bc2cf87dea199",
"assets/assets/icons/countries/mm.png": "8f87aaa407db9cc64c4a9826c9d7e6fa",
"assets/assets/icons/countries/mn.png": "ceb0fe35b39f5c8837b058765455ddfc",
"assets/assets/icons/countries/mo.png": "7f0596d1fc9c5c656a3ec9dc5a04df37",
"assets/assets/icons/countries/mp.png": "e371c36ab0feec80aa1e55fc9feca812",
"assets/assets/icons/countries/mq.png": "6ea58dcc318ee33b8bbfbbe2c0828981",
"assets/assets/icons/countries/mr.png": "a2ff016f7c3b29be30ae42c3d6551e24",
"assets/assets/icons/countries/ms.png": "196c582d92792c52efd593833273dec5",
"assets/assets/icons/countries/mt.png": "b980ae3d610126b021c65bb495048376",
"assets/assets/icons/countries/mu.png": "be6276e754db3fa7ac75a87e84e4dcbf",
"assets/assets/icons/countries/mv.png": "69b94cc436fcefbe285d813bbaabf175",
"assets/assets/icons/countries/mw.png": "c5285b878e3c9b33afb79b8addbe6dbd",
"assets/assets/icons/countries/mx.png": "06d58a04056ab9873543305840fb5a56",
"assets/assets/icons/countries/my.png": "9c49500e7b51ce0ae4b98ec99de95a32",
"assets/assets/icons/countries/mz.png": "f1d1804716e71be8e4946e3587ebb4b3",
"assets/assets/icons/countries/na.png": "9c6003ea3afc65eae4489748db8887e7",
"assets/assets/icons/countries/nc.png": "ce0e0e54df8b221433975b8e04efc01f",
"assets/assets/icons/countries/ne.png": "dffdfea03aa2ed4d168d894d21740263",
"assets/assets/icons/countries/nf.png": "ce540234892ae5ed8e68e6462fc20acc",
"assets/assets/icons/countries/ng.png": "8308f01183259b97eaa2a68ccb4a0037",
"assets/assets/icons/countries/ni.png": "39ab2318d8d98ae488c6269e4b919484",
"assets/assets/icons/countries/nl.png": "1f7375eefb2c0a62985acfc48d078770",
"assets/assets/icons/countries/no.png": "8c65ff903106193cd7ec5b0ca12b0a49",
"assets/assets/icons/countries/np.png": "4e9e9df8645ccd9644bc4098f39ea4ae",
"assets/assets/icons/countries/nr.png": "8b3b6110c95666b95bb9f3439f92c988",
"assets/assets/icons/countries/nu.png": "37fd1771e6b21423c232b9868f49ca80",
"assets/assets/icons/countries/nz.png": "83cc259c5c0899aa2a9e50045d9d1560",
"assets/assets/icons/countries/om.png": "6d90947a4ceb8ac4bd8a488a842b759d",
"assets/assets/icons/countries/pa.png": "d3444269356fc7f7078463c140fbea45",
"assets/assets/icons/countries/pe.png": "8642b97700eaf4ab69540b9e0d0a31f2",
"assets/assets/icons/countries/pf.png": "592ec44ae71c5b4ed18b4d6a143a5c4f",
"assets/assets/icons/countries/pg.png": "caad2e95346f8b25d33911ecf06140f3",
"assets/assets/icons/countries/ph.png": "0b3ef0abacd663c96b3a1a619010edf6",
"assets/assets/icons/countries/pk.png": "bf03def4c8469debd6a4f1e5126d37dd",
"assets/assets/icons/countries/pl.png": "ae50829de7a3a290a44d232b78bc619f",
"assets/assets/icons/countries/pm.png": "a7a0d0c51323f7f34812c73cd1a381c8",
"assets/assets/icons/countries/pn.png": "c9feec81a223b01236bdcb790a128089",
"assets/assets/icons/countries/pr.png": "8fea24ddb000f9e52c66402db806dae5",
"assets/assets/icons/countries/ps.png": "e94772b7c3d81694d862708c81ba9b8e",
"assets/assets/icons/countries/pt.png": "23d1e970597141e13e10ba3dc2de19ad",
"assets/assets/icons/countries/pw.png": "8b55432bc2f83a850300c05a0411641f",
"assets/assets/icons/countries/py.png": "951788fad349f435555b95525e2e2457",
"assets/assets/icons/countries/qa.png": "e39f506d43ef33a93bd956f42455a239",
"assets/assets/icons/countries/re.png": "a7a0d0c51323f7f34812c73cd1a381c8",
"assets/assets/icons/countries/ro.png": "b81fe1c841ef3908dea13082938eebf5",
"assets/assets/icons/countries/rs.png": "b8b6a8d5d2191ffbeb12c6d184dac4e1",
"assets/assets/icons/countries/ru.png": "7f517f7295553565b27ad67bcd76ce60",
"assets/assets/icons/countries/rw.png": "186dc3285269db92ac6f8934d6cf18a2",
"assets/assets/icons/countries/sa.png": "3a2fb5ec386dcdeccb7202cf2cb53f77",
"assets/assets/icons/countries/sb.png": "a52f15f380234683b25874f677008267",
"assets/assets/icons/countries/sc.png": "d1ff90b22c12d77e7ada82fc97771784",
"assets/assets/icons/countries/sd.png": "afb46083aa020450af3e3d41a3fda592",
"assets/assets/icons/countries/se.png": "a6f5545b1148c3f34e851c1c8a8e8e69",
"assets/assets/icons/countries/sg.png": "21f397ec83d35884cc20d9234b34e5ee",
"assets/assets/icons/countries/sh.png": "79a11c17c4ece1ca16a2fa5a58a4f932",
"assets/assets/icons/countries/si.png": "55868593c9a629a575583e33da09cc64",
"assets/assets/icons/countries/sj.png": "80db597248c566d711b85069dc169fad",
"assets/assets/icons/countries/sk.png": "df709b4439322208e4352a1d9005a150",
"assets/assets/icons/countries/sl.png": "b016bfe81928d1f2ca5a7293e7257d65",
"assets/assets/icons/countries/sm.png": "4ac331884ebde8e09e4344271b3abd12",
"assets/assets/icons/countries/sn.png": "3dd025501304f60dd88772e03a504864",
"assets/assets/icons/countries/so.png": "f7a5f968edd46d967ff78ce74211a8a9",
"assets/assets/icons/countries/sr.png": "28c0470a9f342f6fa3b59d10423ae41f",
"assets/assets/icons/countries/ss.png": "657f3854691297355a15918477b4fbfb",
"assets/assets/icons/countries/st.png": "457849630a02207f24ddb8a1c486a904",
"assets/assets/icons/countries/sv.png": "61cc65e2f0b683ed4660fc43439862c7",
"assets/assets/icons/countries/sx.png": "d69d501927007036a028f36d064aa624",
"assets/assets/icons/countries/sy.png": "b879dd4576c39cefd91528869215db1c",
"assets/assets/icons/countries/sz.png": "b84693d4a1529457f3f42915e79f0695",
"assets/assets/icons/countries/tc.png": "6a6efef219ede72ae6239814077769d2",
"assets/assets/icons/countries/td.png": "ee231c88069f2eba259b869b1222a832",
"assets/assets/icons/countries/tf.png": "f0e2eacc7405f58ca3dd87ca52f6e408",
"assets/assets/icons/countries/tg.png": "6e5e7608167f26ceb500f1a999fe202b",
"assets/assets/icons/countries/th.png": "a5e21754503ba42692b766fc64e71792",
"assets/assets/icons/countries/tj.png": "f3b93206896b74a666ace3d56c8e6cbc",
"assets/assets/icons/countries/tk.png": "83f23f03ad85ccc152e72a052743fe4b",
"assets/assets/icons/countries/tl.png": "071f59a63558f0fd4de95a2dac74367b",
"assets/assets/icons/countries/tm.png": "603725f3b11d9d23c563cbb368d27534",
"assets/assets/icons/countries/tn.png": "87d0d9157f7829745546a4332e157d8d",
"assets/assets/icons/countries/to.png": "e746cadf42746955d051cdeb87b4269b",
"assets/assets/icons/countries/tr.png": "c9d37c51e357f98c3188b8938a928ed1",
"assets/assets/icons/countries/tt.png": "86ea7ec5cb9211113274ee1c8148d113",
"assets/assets/icons/countries/tv.png": "01f9de56f0157ecdf0cb7e6cd0bd22d5",
"assets/assets/icons/countries/tw.png": "c0be5fa878d473109d49582a315d3aa5",
"assets/assets/icons/countries/tz.png": "0b487760cbe895a9addc60c1ab81b129",
"assets/assets/icons/countries/ua.png": "229bf5d8e24567943dc452997dd44722",
"assets/assets/icons/countries/ug.png": "70752a1fb26cd94a7fd13f1cc35d0ea5",
"assets/assets/icons/countries/um.png": "bfd561ea4ae1eea6f60307f6784ccc88",
"assets/assets/icons/countries/un.png": "c67509e8604dca77eaf424597ff06274",
"assets/assets/icons/countries/us.png": "9f3a57bdef96b21687c1caf40e0de99c",
"assets/assets/icons/countries/uy.png": "650c35cfad291e73f94a2017bb0c7b5f",
"assets/assets/icons/countries/uz.png": "d98cd465180a164435db55e329783928",
"assets/assets/icons/countries/va.png": "046018961eb04dec81121793c61801bb",
"assets/assets/icons/countries/vc.png": "adc13872f553c9cd6e23ee3d8877c8c7",
"assets/assets/icons/countries/ve.png": "3b547a73be6cb348aa4c0b300536539d",
"assets/assets/icons/countries/vg.png": "6eb6c466b36a8deda79efaa53937aefc",
"assets/assets/icons/countries/vi.png": "af22c0c3c07acb30a5624865c741f5f3",
"assets/assets/icons/countries/vn.png": "21f025f60df55e0d7b6753513c5bf86f",
"assets/assets/icons/countries/vu.png": "1c2cc913450401a475375371ab12d637",
"assets/assets/icons/countries/wf.png": "acc4b43f05093d9e1c1aeac61ed42247",
"assets/assets/icons/countries/ws.png": "bc25fd2d2270b61c1b7b091abe3689eb",
"assets/assets/icons/countries/xk.png": "284a3aa1c46b5c2678cbb323db7b43f5",
"assets/assets/icons/countries/ye.png": "17022423bd65669748996ec1d5c4246d",
"assets/assets/icons/countries/yt.png": "6ea58dcc318ee33b8bbfbbe2c0828981",
"assets/assets/icons/countries/za.png": "d81368e2958f6f6f3ea7ae34578fbdb8",
"assets/assets/icons/countries/zm.png": "9d66cdf75263448052b1c49f4ea09f12",
"assets/assets/icons/countries/zw.png": "ba480557d05869a3c9ad1f16cc220540",
"assets/assets/icons/default.png": "7b02069d1aa0ee60c56ca8a729aef1c3",
"assets/assets/icons/drop_down.png": "435bc601815c81b6df86cd797f8fd9fd",
"assets/assets/icons/edit.png": "7013e05ac25187eec273ee467d7f5057",
"assets/assets/icons/empty_cart_icon.png": "ad8863edf796b978a6c726f6f213bf71",
"assets/assets/icons/explore.png": "357ca71a93f7a1cd36dcbfd85987cb77",
"assets/assets/icons/facebook.png": "7813c7ad8971b403e28ea6f726a0c53c",
"assets/assets/icons/fb-login.png": "c384d6c59b89f407202a12053b9e55e0",
"assets/assets/icons/filter.png": "9d6f0fa483851c8e838526f5f148cce8",
"assets/assets/icons/gmail.png": "ab694087a70a53b319cd76f592011c76",
"assets/assets/icons/google-icon.png": "5bbaef32212af5390364385962831ada",
"assets/assets/icons/google.png": "20d908688903a138ec4fe08224d37526",
"assets/assets/icons/heart.png": "51b8b13dd457cc4f2b97cd177c7f4583",
"assets/assets/icons/heart_fill.png": "025db9ed293c4aad4092df5e20bf9347",
"assets/assets/icons/home.png": "ea819d011873ed84efe914b78b62f4a6",
"assets/assets/icons/instagram.png": "c533de56537ea64ed86bfaf1a5daea72",
"assets/assets/icons/label.png": "ee500f11d7836b352f5e1ac20aa49abd",
"assets/assets/icons/linkedin.png": "42d5f34004844e713880b01987dd0fae",
"assets/assets/icons/logo.png": "ee9741e2805728d34e7f5946a8971073",
"assets/assets/icons/mot.jpg": "9929611c0f3c41f18d2d8fe29aa4d35c",
"assets/assets/icons/myFatoorah.png": "8e9057a0ea78ccf9a0c55acc3877aac5",
"assets/assets/icons/no-address_found.svg": "44f4103b1fcaedf2ee7eb57fe57e2425",
"assets/assets/icons/notify_icon.png": "9d805a0f53cf4676a215c7d1cc5be320",
"assets/assets/icons/no_pro-history-flip.png": "fc50eaf5272bdde42f1cd2846bf116f8",
"assets/assets/icons/no_pro-history.png": "4b97e92eb356b29aac365392f7cc8852",
"assets/assets/icons/no_product.png": "1700dc6e7183a052931b13afb59f14a5",
"assets/assets/icons/offers.png": "f167743101f05def9f2db03659cc88f2",
"assets/assets/icons/search.png": "d674aff49d8d51fa240f0c0fbe326e3e",
"assets/assets/icons/settings.png": "68aa0ae02c08f4b051399aa151cc995c",
"assets/assets/icons/share.png": "604f3d96da0375c6b07e9499e2958e3f",
"assets/assets/icons/sliderRect.png": "1e2138170ab9eaf52c2006d997eaad44",
"assets/assets/icons/snapchat.png": "b278f5eb44d2c87dcfcc129ac1f33e07",
"assets/assets/icons/sort.png": "b78cac25f232a009b789016f004049a9",
"assets/assets/icons/store.png": "af46ecbfd96fef555081e1aeb149a410",
"assets/assets/icons/success.png": "376f2f837f1cf7142495f3c77c2605d5",
"assets/assets/icons/thanks.png": "3fbd27877b46af150191c01e998bae20",
"assets/assets/icons/twitter.png": "b2c15794a958cf2486bd05d52d8ee6ab",
"assets/assets/icons/whatsapp.png": "9b019e63744143e00420400c1f8a2715",
"assets/assets/icons/youtube.png": "a61ab98c728c14f6f9020acff6142087",
"assets/assets/images/demo.png": "fe2e77ab876fec79c780eab2898775d3",
"assets/assets/images/demoAd.png": "90fe55643542c5bbb1e0f0e807982fb5",
"assets/assets/images/flashdeals.jpg": "30d9f6c3f352832d02a353150b6636fd",
"assets/assets/images/newsletter.jpg": "5da67b449e7e1cb5ad0b943d1341bf6e",
"assets/assets/images/promotions.png": "32cab14fa3664addb5c7ad81931fb1ea",
"assets/FontManifest.json": "2f44df3694f3096c63e7824fe76ce759",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "bf5561179cb6485757b2bb90365080ce",
"assets/packages/country_code_picker/flags/ad.png": "796914c894c19b68adf1a85057378dbc",
"assets/packages/country_code_picker/flags/ae.png": "045eddd7da0ef9fb3a7593d7d2262659",
"assets/packages/country_code_picker/flags/af.png": "44bc280cbce3feb6ad13094636033999",
"assets/packages/country_code_picker/flags/ag.png": "9bae91983418f15d9b8ffda5ba340c4e",
"assets/packages/country_code_picker/flags/ai.png": "cfb0f715fc17e9d7c8662987fbe30867",
"assets/packages/country_code_picker/flags/al.png": "af06d6e1028d16ec472d94e9bf04d593",
"assets/packages/country_code_picker/flags/am.png": "2de892fa2f750d73118b1aafaf857884",
"assets/packages/country_code_picker/flags/an.png": "469f91bffae95b6ad7c299ac800ee19d",
"assets/packages/country_code_picker/flags/ao.png": "d19240c02a02e59c3c1ec0959f877f2e",
"assets/packages/country_code_picker/flags/aq.png": "c57c903b39fe5e2ba1e01bc3d330296c",
"assets/packages/country_code_picker/flags/ar.png": "bd71b7609d743ab9ecfb600e10ac7070",
"assets/packages/country_code_picker/flags/as.png": "830d17d172d2626e13bc6397befa74f3",
"assets/packages/country_code_picker/flags/at.png": "7edbeb0f5facb47054a894a5deb4533c",
"assets/packages/country_code_picker/flags/au.png": "600835121397ea512cea1f3204278329",
"assets/packages/country_code_picker/flags/aw.png": "8966dbf74a9f3fd342b8d08768e134cc",
"assets/packages/country_code_picker/flags/ax.png": "ffffd1de8a677dc02a47eb8f0e98d9ac",
"assets/packages/country_code_picker/flags/az.png": "967d8ee83bfe2f84234525feab9d1d4c",
"assets/packages/country_code_picker/flags/ba.png": "9faf88de03becfcd39b6231e79e51c2e",
"assets/packages/country_code_picker/flags/bb.png": "a5bb4503d41e97c08b2d4a9dd934fa30",
"assets/packages/country_code_picker/flags/bd.png": "5fbfa1a996e6da8ad4c5f09efc904798",
"assets/packages/country_code_picker/flags/be.png": "498270989eaefce71c393075c6e154c8",
"assets/packages/country_code_picker/flags/bf.png": "9b91173a8f8bb52b1eca2e97908f55dd",
"assets/packages/country_code_picker/flags/bg.png": "d591e9fa192837524f57db9ab2020a9e",
"assets/packages/country_code_picker/flags/bh.png": "6e48934b768705ca98a7d1e56422dc83",
"assets/packages/country_code_picker/flags/bi.png": "fb60b979ef7d78391bb32896af8b7021",
"assets/packages/country_code_picker/flags/bj.png": "9b503fbf4131f93fbe7b574b8c74357e",
"assets/packages/country_code_picker/flags/bl.png": "30f55fe505cb4f3ddc09a890d4073ebe",
"assets/packages/country_code_picker/flags/bm.png": "eb2492b804c9028f3822cdb1f83a48e2",
"assets/packages/country_code_picker/flags/bn.png": "94d863533155418d07a607b52ca1b701",
"assets/packages/country_code_picker/flags/bo.png": "92c247480f38f66397df4eb1f8ff0a68",
"assets/packages/country_code_picker/flags/bq.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/country_code_picker/flags/br.png": "8fa9d6f8a64981d554e48f125c59c924",
"assets/packages/country_code_picker/flags/bs.png": "814a9a20dd15d78f555e8029795821f3",
"assets/packages/country_code_picker/flags/bt.png": "3c0fed3f67d5aa1132355ed76d2a14d0",
"assets/packages/country_code_picker/flags/bv.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/bw.png": "04fa1f47fc150e7e10938a2f497795be",
"assets/packages/country_code_picker/flags/by.png": "03f5334e6ab8a537d0fc03d76a4e0c8a",
"assets/packages/country_code_picker/flags/bz.png": "e95df47896e2a25df726c1dccf8af9ab",
"assets/packages/country_code_picker/flags/ca.png": "bc87852952310960507a2d2e590c92bf",
"assets/packages/country_code_picker/flags/cc.png": "126eedd79580be7279fec9bb78add64d",
"assets/packages/country_code_picker/flags/cd.png": "072243e38f84b5d2a7c39092fa883dda",
"assets/packages/country_code_picker/flags/cf.png": "625ad124ba8147122ee198ae5b9f061e",
"assets/packages/country_code_picker/flags/cg.png": "7ea7b458a77558527c030a5580b06779",
"assets/packages/country_code_picker/flags/ch.png": "8d7a211fd742d4dea9d1124672b88cda",
"assets/packages/country_code_picker/flags/ci.png": "0f94edf22f735b4455ac7597efb47ca5",
"assets/packages/country_code_picker/flags/ck.png": "35c6c878d96485422e28461bb46e7d9f",
"assets/packages/country_code_picker/flags/cl.png": "658cdc5c9fd73213495f1800ce1e2b78",
"assets/packages/country_code_picker/flags/cm.png": "89f02c01702cb245938f3d62db24f75d",
"assets/packages/country_code_picker/flags/cn.png": "6b8c353044ef5e29631279e0afc1a8c3",
"assets/packages/country_code_picker/flags/co.png": "e2fa18bb920565594a0e62427540163c",
"assets/packages/country_code_picker/flags/cr.png": "475b2d72352df176b722da898490afa2",
"assets/packages/country_code_picker/flags/cu.png": "8d4a05799ef3d6bbe07b241dd4398114",
"assets/packages/country_code_picker/flags/cv.png": "60d75c9d0e0cd186bb1b70375c797a0c",
"assets/packages/country_code_picker/flags/cw.png": "db36ed08bfafe9c5d0d02332597676ca",
"assets/packages/country_code_picker/flags/cx.png": "65421207e2eb319ba84617290bf24082",
"assets/packages/country_code_picker/flags/cy.png": "9a3518f15815fa1705f1d7ca18907748",
"assets/packages/country_code_picker/flags/cz.png": "482c8ba16ff3d81eeef60650db3802e4",
"assets/packages/country_code_picker/flags/de.png": "6f94b174f4a02f3292a521d992ed5193",
"assets/packages/country_code_picker/flags/dj.png": "dc144d9502e4edb3e392d67965f7583e",
"assets/packages/country_code_picker/flags/dk.png": "f9d6bcded318f5910b8bc49962730afa",
"assets/packages/country_code_picker/flags/dm.png": "b7ab53eeee4303e193ea1603f33b9c54",
"assets/packages/country_code_picker/flags/do.png": "a05514a849c002b2a30f420070eb0bbb",
"assets/packages/country_code_picker/flags/dz.png": "93afdc9291f99de3dd88b29be3873a20",
"assets/packages/country_code_picker/flags/ec.png": "cbaf1d60bbcde904a669030e1c883f3e",
"assets/packages/country_code_picker/flags/ee.png": "54aa1816507276a17070f395a4a89e2e",
"assets/packages/country_code_picker/flags/eg.png": "9e371179452499f2ba7b3c5ff47bec69",
"assets/packages/country_code_picker/flags/eh.png": "f781a34a88fa0adf175e3aad358575ed",
"assets/packages/country_code_picker/flags/er.png": "08a95adef16cb9174f183f8d7ac1102b",
"assets/packages/country_code_picker/flags/es.png": "e180e29212048d64951449cc80631440",
"assets/packages/country_code_picker/flags/et.png": "2c5eec0cda6655b5228fe0e9db763a8e",
"assets/packages/country_code_picker/flags/eu.png": "b32e3d089331f019b61399a1df5a763a",
"assets/packages/country_code_picker/flags/fi.png": "a79f2dbc126dac46e4396fcc80942a82",
"assets/packages/country_code_picker/flags/fj.png": "6030dc579525663142e3e8e04db80154",
"assets/packages/country_code_picker/flags/fk.png": "0e9d14f59e2e858cd0e89bdaec88c2c6",
"assets/packages/country_code_picker/flags/fm.png": "d4dffd237271ddd37f3bbde780a263bb",
"assets/packages/country_code_picker/flags/fo.png": "0bfc387f2eb3d9b85225d61b515ee8fc",
"assets/packages/country_code_picker/flags/fr.png": "79cbece941f09f9a9a46d42cabd523b1",
"assets/packages/country_code_picker/flags/ga.png": "fa05207326e695b552e0a885164ee5ac",
"assets/packages/country_code_picker/flags/gb-eng.png": "0b05e615c5a3feee707a4d72009cd767",
"assets/packages/country_code_picker/flags/gb-nir.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/gb-sct.png": "075bb357733327ec4115ab5cbba792ac",
"assets/packages/country_code_picker/flags/gb-wls.png": "72005cb7be41ac749368a50a9d9f29ee",
"assets/packages/country_code_picker/flags/gb.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/gd.png": "42ad178232488665870457dd53e2b037",
"assets/packages/country_code_picker/flags/ge.png": "93d6c82e9dc8440b706589d086be2c1c",
"assets/packages/country_code_picker/flags/gf.png": "71678ea3b4a8eeabd1e64a60eece4256",
"assets/packages/country_code_picker/flags/gg.png": "cdb11f97802d458cfa686f33459f0d4b",
"assets/packages/country_code_picker/flags/gh.png": "c73432df8a63fb674f93e8424eae545f",
"assets/packages/country_code_picker/flags/gi.png": "58894db0e25e9214ec2271d96d4d1623",
"assets/packages/country_code_picker/flags/gl.png": "d09f355715f608263cf0ceecd3c910ed",
"assets/packages/country_code_picker/flags/gm.png": "c670404188a37f5d347d03947f02e4d7",
"assets/packages/country_code_picker/flags/gn.png": "765a0434cb071ad4090a8ea06797a699",
"assets/packages/country_code_picker/flags/gp.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/gq.png": "0dc3ca0cda7dfca81244e1571a4c466c",
"assets/packages/country_code_picker/flags/gr.png": "86aeb970a79aa561187fa8162aee2938",
"assets/packages/country_code_picker/flags/gs.png": "524d0f00ee874af0cdf3c00f49fa17ae",
"assets/packages/country_code_picker/flags/gt.png": "df7a020c2f611bdcb3fa8cd2f581b12f",
"assets/packages/country_code_picker/flags/gu.png": "babddec7750bad459ca1289d7ac7fc6a",
"assets/packages/country_code_picker/flags/gw.png": "25bc1b5542dadf2992b025695baf056c",
"assets/packages/country_code_picker/flags/gy.png": "75f8dd61ddedb3cf595075e64fc80432",
"assets/packages/country_code_picker/flags/hk.png": "51df04cf3db3aefd1778761c25a697dd",
"assets/packages/country_code_picker/flags/hm.png": "600835121397ea512cea1f3204278329",
"assets/packages/country_code_picker/flags/hn.png": "09ca9da67a9c84f4fc25f96746162f3c",
"assets/packages/country_code_picker/flags/hr.png": "04cfd167b9564faae3b2dd3ef13a0794",
"assets/packages/country_code_picker/flags/ht.png": "009d5c3627c89310bd25522b636b09bf",
"assets/packages/country_code_picker/flags/hu.png": "66c22db579470694c7928598f6643cc6",
"assets/packages/country_code_picker/flags/id.png": "78d94c7d31fed988e9b92279895d8b05",
"assets/packages/country_code_picker/flags/ie.png": "5790c74e53070646cd8a06eec43e25d6",
"assets/packages/country_code_picker/flags/il.png": "b72b572cc199bf03eba1c008cd00d3cb",
"assets/packages/country_code_picker/flags/im.png": "17ddc1376b22998731ccc5295ba9db1c",
"assets/packages/country_code_picker/flags/in.png": "be8bf440db707c1cc2ff9dd0328414e5",
"assets/packages/country_code_picker/flags/io.png": "8021829259b5030e95f45902d30f137c",
"assets/packages/country_code_picker/flags/iq.png": "dc9f3e8ab93b20c33f4a4852c162dc1e",
"assets/packages/country_code_picker/flags/ir.png": "df9b6d2134d1c5d4d3e676d9857eb675",
"assets/packages/country_code_picker/flags/is.png": "22358dadd1d5fc4f11fcb3c41d453ec0",
"assets/packages/country_code_picker/flags/it.png": "99f67d3c919c7338627d922f552c8794",
"assets/packages/country_code_picker/flags/je.png": "8d6482f71bd0728025134398fc7c6e58",
"assets/packages/country_code_picker/flags/jm.png": "3537217c5eeb048198415d398e0fa19e",
"assets/packages/country_code_picker/flags/jo.png": "d5bfa96801b7ed670ad1be55a7bd94ed",
"assets/packages/country_code_picker/flags/jp.png": "b7a724413be9c2b001112c665d764385",
"assets/packages/country_code_picker/flags/ke.png": "034164976de81ef96f47cfc6f708dde6",
"assets/packages/country_code_picker/flags/kg.png": "a9b6a1b8fe03b8b617f30a28a1d61c12",
"assets/packages/country_code_picker/flags/kh.png": "cd50a67c3b8058585b19a915e3635107",
"assets/packages/country_code_picker/flags/ki.png": "69a7d5a8f6f622e6d2243f3f04d1d4c0",
"assets/packages/country_code_picker/flags/km.png": "204a44c4c89449415168f8f77c4c0d31",
"assets/packages/country_code_picker/flags/kn.png": "65d2fc69949162f1bc14eb9f2da5ecbc",
"assets/packages/country_code_picker/flags/kp.png": "fd6e44b3fe460988afbfd0cb456282b2",
"assets/packages/country_code_picker/flags/kr.png": "9e2a9c7ae07cf8977e8f01200ee2912e",
"assets/packages/country_code_picker/flags/kw.png": "b2afbb748e0b7c0b0c22f53e11e7dd55",
"assets/packages/country_code_picker/flags/ky.png": "666d01aa03ecdf6b96202cdf6b08b732",
"assets/packages/country_code_picker/flags/kz.png": "cfce5cd7842ef8091b7c25b23c3bb069",
"assets/packages/country_code_picker/flags/la.png": "8c88d02c3824eea33af66723d41bb144",
"assets/packages/country_code_picker/flags/lb.png": "b21c8d6f5dd33761983c073f217a0c4f",
"assets/packages/country_code_picker/flags/lc.png": "055c35de209c63b67707c5297ac5079a",
"assets/packages/country_code_picker/flags/li.png": "3cf7e27712e36f277ca79120c447e5d1",
"assets/packages/country_code_picker/flags/lk.png": "56412c68b1d952486f2da6c1318adaf2",
"assets/packages/country_code_picker/flags/lr.png": "1c159507670497f25537ad6f6d64f88d",
"assets/packages/country_code_picker/flags/ls.png": "f2d4025bf560580ab141810a83249df0",
"assets/packages/country_code_picker/flags/lt.png": "e38382f3f7cb60cdccbf381cea594d2d",
"assets/packages/country_code_picker/flags/lu.png": "4cc30d7a4c3c3b98f55824487137680d",
"assets/packages/country_code_picker/flags/lv.png": "6a86b0357df4c815f1dc21e0628aeb5f",
"assets/packages/country_code_picker/flags/ly.png": "777f861e476f1426bf6663fa283243e5",
"assets/packages/country_code_picker/flags/ma.png": "dd5dc19e011755a7610c1e7ccd8abdae",
"assets/packages/country_code_picker/flags/mc.png": "412ce0b1f821e3912e83ae356b30052e",
"assets/packages/country_code_picker/flags/md.png": "7b273f5526b88ed0d632fd0fd8be63be",
"assets/packages/country_code_picker/flags/me.png": "74434a1447106cc4fb7556c76349c3da",
"assets/packages/country_code_picker/flags/mf.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/mg.png": "a562a819338427e57c57744bb92b1ef1",
"assets/packages/country_code_picker/flags/mh.png": "2a7c77b8b1b4242c6aa8539babe127a7",
"assets/packages/country_code_picker/flags/mk.png": "8b17ec36efa149749b8d3fd59f55974b",
"assets/packages/country_code_picker/flags/ml.png": "1a3a39e5c9f2fdccfb6189a117d04f72",
"assets/packages/country_code_picker/flags/mm.png": "b664dc1c591c3bf34ad4fd223922a439",
"assets/packages/country_code_picker/flags/mn.png": "02af8519f83d06a69068c4c0f6463c8a",
"assets/packages/country_code_picker/flags/mo.png": "da3700f98c1fe1739505297d1efb9e12",
"assets/packages/country_code_picker/flags/mp.png": "60b14b06d1ce23761767b73d54ef613a",
"assets/packages/country_code_picker/flags/mq.png": "446edd9300307eda562e5c9ac307d7f2",
"assets/packages/country_code_picker/flags/mr.png": "733d747ba4ec8cf120d5ebc0852de34a",
"assets/packages/country_code_picker/flags/ms.png": "32daa6ee99335b73cb3c7519cfd14a61",
"assets/packages/country_code_picker/flags/mt.png": "808538b29f6b248469a184bbf787a97f",
"assets/packages/country_code_picker/flags/mu.png": "aec293ef26a9df356ea2f034927b0a74",
"assets/packages/country_code_picker/flags/mv.png": "69843b1ad17352372e70588b9c37c7cc",
"assets/packages/country_code_picker/flags/mw.png": "efc0c58b76be4bf1c3efda589b838132",
"assets/packages/country_code_picker/flags/mx.png": "b69db8e7f14b18ddd0e3769f28137552",
"assets/packages/country_code_picker/flags/my.png": "7b4bc8cdef4f7b237791c01f5e7874f4",
"assets/packages/country_code_picker/flags/mz.png": "40a78c6fa368aed11b3d483cdd6973a5",
"assets/packages/country_code_picker/flags/na.png": "3499146c4205c019196f8a0f7a7aa156",
"assets/packages/country_code_picker/flags/nc.png": "a3ee8fc05db66f7ce64bce533441da7f",
"assets/packages/country_code_picker/flags/ne.png": "a152defcfb049fa960c29098c08e3cd3",
"assets/packages/country_code_picker/flags/nf.png": "9a4a607db5bc122ff071cbfe58040cf7",
"assets/packages/country_code_picker/flags/ng.png": "15b7ad41c03c87b9f30c19d37f457817",
"assets/packages/country_code_picker/flags/ni.png": "6985ed1381cb33a5390258795f72e95a",
"assets/packages/country_code_picker/flags/nl.png": "67f4705e96d15041566913d30b00b127",
"assets/packages/country_code_picker/flags/no.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/np.png": "35e3d64e59650e1f1cf909f5c6d85176",
"assets/packages/country_code_picker/flags/nr.png": "f5ae3c51dfacfd6719202b4b24e20131",
"assets/packages/country_code_picker/flags/nu.png": "c8bb4da14b8ffb703036b1bae542616d",
"assets/packages/country_code_picker/flags/nz.png": "b48a5e047a5868e59c2abcbd8387082d",
"assets/packages/country_code_picker/flags/om.png": "79a867771bd9447d372d5df5ec966b36",
"assets/packages/country_code_picker/flags/pa.png": "49d53d64564555ea5976c20ea9365ea6",
"assets/packages/country_code_picker/flags/pe.png": "724d3525f205dfc8705bb6e66dd5bdff",
"assets/packages/country_code_picker/flags/pf.png": "3ba7f48f96a7189f9511a7f77ea0a7a4",
"assets/packages/country_code_picker/flags/pg.png": "06961c2b216061b0e40cb4221abc2bff",
"assets/packages/country_code_picker/flags/ph.png": "de75e3931c41ae8b9cae8823a9500ca7",
"assets/packages/country_code_picker/flags/pk.png": "0228ceefa355b34e8ec3be8bfd1ddb42",
"assets/packages/country_code_picker/flags/pl.png": "a7b46e3dcd5571d40c3fa8b62b1f334a",
"assets/packages/country_code_picker/flags/pm.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/pn.png": "ffa91e8a1df1eac6b36d737aa76d701b",
"assets/packages/country_code_picker/flags/pr.png": "ac1c4bcef3da2034e1668ab1e95ae82d",
"assets/packages/country_code_picker/flags/ps.png": "b6e1bd808cf8e5e3cd2b23e9cf98d12e",
"assets/packages/country_code_picker/flags/pt.png": "b4cf39fbafb4930dec94f416e71fc232",
"assets/packages/country_code_picker/flags/pw.png": "92ec1edf965de757bc3cca816f4cebbd",
"assets/packages/country_code_picker/flags/py.png": "6bb880f2dd24622093ac59d4959ae70d",
"assets/packages/country_code_picker/flags/qa.png": "b95e814a13e5960e28042347cec5bc0d",
"assets/packages/country_code_picker/flags/re.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/ro.png": "1ee3ca39dbe79f78d7fa903e65161fdb",
"assets/packages/country_code_picker/flags/rs.png": "ee9ae3b80531d6d0352a39a56c5130c0",
"assets/packages/country_code_picker/flags/ru.png": "9a3b50fcf2f7ae2c33aa48b91ab6cd85",
"assets/packages/country_code_picker/flags/rw.png": "6ef05d29d0cded56482b1ad17f49e186",
"assets/packages/country_code_picker/flags/sa.png": "ef836bd02f745af03aa0d01003942d44",
"assets/packages/country_code_picker/flags/sb.png": "e3a6704b7ba2621480d7074a6e359b03",
"assets/packages/country_code_picker/flags/sc.png": "52f9bd111531041468c89ce9da951026",
"assets/packages/country_code_picker/flags/sd.png": "93e252f26bead630c0a0870de5a88f14",
"assets/packages/country_code_picker/flags/se.png": "24d2bed25b5aad316134039c2903ac59",
"assets/packages/country_code_picker/flags/sg.png": "94ea82acf1aa0ea96f58c6b0cd1ed452",
"assets/packages/country_code_picker/flags/sh.png": "fc5305efe4f16b63fb507606789cc916",
"assets/packages/country_code_picker/flags/si.png": "922d047a95387277f84fdc246f0a8d11",
"assets/packages/country_code_picker/flags/sj.png": "f7f33a43528edcdbbe5f669b538bee2d",
"assets/packages/country_code_picker/flags/sk.png": "0f8da623c8f140ac2b5a61234dd3e7cd",
"assets/packages/country_code_picker/flags/sl.png": "a7785c2c81149afab11a5fa86ee0edae",
"assets/packages/country_code_picker/flags/sm.png": "b41d5b7eb3679c2e477fbd25f5ee9e7d",
"assets/packages/country_code_picker/flags/sn.png": "25201e1833a1b642c66c52a09b43f71e",
"assets/packages/country_code_picker/flags/so.png": "cfe6bb95bcd259a3cc41a09ee7ca568b",
"assets/packages/country_code_picker/flags/sr.png": "e5719b1a8ded4e5230f6bac3efc74a90",
"assets/packages/country_code_picker/flags/ss.png": "f1c99aded110fc8a0bc85cd6c63895fb",
"assets/packages/country_code_picker/flags/st.png": "7a28a4f0333bf4fb4f34b68e65c04637",
"assets/packages/country_code_picker/flags/sv.png": "994c8315ced2a4d8c728010447371ea1",
"assets/packages/country_code_picker/flags/sx.png": "8fce7986b531ff8936540ad1155a5df5",
"assets/packages/country_code_picker/flags/sy.png": "2e33ad23bffc935e4a06128bc5519a2b",
"assets/packages/country_code_picker/flags/sz.png": "5e45a755ac4b33df811f0fb76585270e",
"assets/packages/country_code_picker/flags/tc.png": "6f2d1a2b9f887be4b3568169e297a506",
"assets/packages/country_code_picker/flags/td.png": "51b129223db46adc71f9df00c93c2868",
"assets/packages/country_code_picker/flags/tf.png": "dc3f8c0d9127aa82cbd45b8861a67bf5",
"assets/packages/country_code_picker/flags/tg.png": "82dabd3a1a4900ae4866a4da65f373e5",
"assets/packages/country_code_picker/flags/th.png": "d4bd67d33ed4ac74b4e9b75d853dae02",
"assets/packages/country_code_picker/flags/tj.png": "2407ba3e581ffd6c2c6b28e9692f9e39",
"assets/packages/country_code_picker/flags/tk.png": "87e390b384b39af41afd489e42b03e07",
"assets/packages/country_code_picker/flags/tl.png": "b3475faa9840f875e5ec38b0e6a6c170",
"assets/packages/country_code_picker/flags/tm.png": "3fe5e44793aad4e8997c175bc72fda06",
"assets/packages/country_code_picker/flags/tn.png": "87f591537e0a5f01bb10fe941798d4e4",
"assets/packages/country_code_picker/flags/to.png": "a93fdd2ace7777e70528936a135f1610",
"assets/packages/country_code_picker/flags/tr.png": "0100620dedad6034185d0d53f80287bd",
"assets/packages/country_code_picker/flags/tt.png": "716fa6f4728a25ffccaf3770f5f05f7b",
"assets/packages/country_code_picker/flags/tv.png": "493c543f07de75f222d8a76506c57989",
"assets/packages/country_code_picker/flags/tw.png": "94322a94d308c89d1bc7146e05f1d3e5",
"assets/packages/country_code_picker/flags/tz.png": "389451347d28584d88b199f0cbe0116b",
"assets/packages/country_code_picker/flags/ua.png": "dbd97cfa852ffc84bfdf98bc2a2c3789",
"assets/packages/country_code_picker/flags/ug.png": "6ae26af3162e5e3408cb5c5e1c968047",
"assets/packages/country_code_picker/flags/um.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/country_code_picker/flags/us.png": "b1cb710eb57a54bc3eea8e4fba79b2c1",
"assets/packages/country_code_picker/flags/uy.png": "20c63ac48df3e394fa242d430276a988",
"assets/packages/country_code_picker/flags/uz.png": "d3713ea19c37aaf94975c3354edd7bb7",
"assets/packages/country_code_picker/flags/va.png": "cfbf48f8fcaded75f186d10e9d1408fd",
"assets/packages/country_code_picker/flags/vc.png": "a604d5acd8c7be6a2bbaa1759ac2949d",
"assets/packages/country_code_picker/flags/ve.png": "f5dabf05e3a70b4eeffa5dad32d10a67",
"assets/packages/country_code_picker/flags/vg.png": "0f19ce4f3c92b0917902cb316be492ba",
"assets/packages/country_code_picker/flags/vi.png": "944281795d5daf17a273f394e51b8b79",
"assets/packages/country_code_picker/flags/vn.png": "7c8f8457485f14482dcab4042e432e87",
"assets/packages/country_code_picker/flags/vu.png": "1bed31828f3b7e0ff260f61ab45396ad",
"assets/packages/country_code_picker/flags/wf.png": "4d33c71f87a33e47a0e466191c4eb3db",
"assets/packages/country_code_picker/flags/ws.png": "8cef2c9761d3c8107145d038bf1417ea",
"assets/packages/country_code_picker/flags/xk.png": "b75ba9ad218b109fca4ef1f3030936f1",
"assets/packages/country_code_picker/flags/ye.png": "1d5dcbcbbc8de944c3db228f0c089569",
"assets/packages/country_code_picker/flags/yt.png": "6cd39fe5669a38f6e33bffc7b697bab2",
"assets/packages/country_code_picker/flags/za.png": "aa749828e6cf1a3393e0d5c9ab088af0",
"assets/packages/country_code_picker/flags/zm.png": "29b67848f5e3864213c84ccf108108ea",
"assets/packages/country_code_picker/flags/zw.png": "d5c4fe9318ebc1a68e3445617215195f",
"assets/packages/country_code_picker/i18n/af.json": "56c2bccb2affb253d9f275496b594453",
"assets/packages/country_code_picker/i18n/am.json": "d32ed11596bd0714c9fce1f1bfc3f16e",
"assets/packages/country_code_picker/i18n/ar.json": "fcc06d7c93de78066b89f0030cdc5fe3",
"assets/packages/country_code_picker/i18n/az.json": "430fd5cb15ab8126b9870261225c4032",
"assets/packages/country_code_picker/i18n/be.json": "b3ded71bde8fbbdac0bf9c53b3f66fff",
"assets/packages/country_code_picker/i18n/bg.json": "fc2f396a23bf35047919002a68cc544c",
"assets/packages/country_code_picker/i18n/bn.json": "1d49af56e39dea0cf602c0c22046d24c",
"assets/packages/country_code_picker/i18n/bs.json": "8fa362bc16f28b5ca0e05e82536d9bd9",
"assets/packages/country_code_picker/i18n/ca.json": "cdf37aa8bb59b485e9b566bff8523059",
"assets/packages/country_code_picker/i18n/cs.json": "7cb74ecb8d6696ba6f333ae1cfae59eb",
"assets/packages/country_code_picker/i18n/da.json": "bb4a77f6bfaf82e4ed0b57ec41e289aa",
"assets/packages/country_code_picker/i18n/de.json": "a56eb56282590b138102ff72d64420f4",
"assets/packages/country_code_picker/i18n/el.json": "e4da1a5d8ab9c6418036307d54a9aa16",
"assets/packages/country_code_picker/i18n/en.json": "759bf8bef6af283a25d7a2204bdf3d78",
"assets/packages/country_code_picker/i18n/es.json": "c9f37c216b3cead47636b86c1b383d20",
"assets/packages/country_code_picker/i18n/et.json": "a5d4f54704d2cdabb368760399d3cae5",
"assets/packages/country_code_picker/i18n/fa.json": "baefec44af8cd45714204adbc6be15cb",
"assets/packages/country_code_picker/i18n/fi.json": "3ad6c7d3efbb4b1041d087a0ef4a70b9",
"assets/packages/country_code_picker/i18n/fr.json": "b9be4d0a12f9d7c3b8fcf6ce41facd0b",
"assets/packages/country_code_picker/i18n/gl.json": "14e84ea53fe4e3cef19ee3ad2dff3967",
"assets/packages/country_code_picker/i18n/ha.json": "4d0c8114bf4e4fd1e68d71ff3af6528f",
"assets/packages/country_code_picker/i18n/he.json": "6f7a03d60b73a8c5f574188370859d12",
"assets/packages/country_code_picker/i18n/hi.json": "3dac80dc00dc7c73c498a1de439840b4",
"assets/packages/country_code_picker/i18n/hr.json": "e7a48f3455a0d27c0fa55fa9cbf02095",
"assets/packages/country_code_picker/i18n/hu.json": "3cd9c2280221102780d44b3565db7784",
"assets/packages/country_code_picker/i18n/hy.json": "1e2f6d1808d039d7db0e7e335f1a7c77",
"assets/packages/country_code_picker/i18n/id.json": "e472d1d00471f86800572e85c3f3d447",
"assets/packages/country_code_picker/i18n/is.json": "6cf088d727cd0db23f935be9f20456bb",
"assets/packages/country_code_picker/i18n/it.json": "c1f0d5c4e81605566fcb7f399d800768",
"assets/packages/country_code_picker/i18n/ja.json": "3f709dc6a477636eff4bfde1bd2d55e1",
"assets/packages/country_code_picker/i18n/ka.json": "23c8b2028efe71dab58f3cee32eada43",
"assets/packages/country_code_picker/i18n/kk.json": "bca3f77a658313bbe950fbc9be504fac",
"assets/packages/country_code_picker/i18n/km.json": "19fedcf05e4fd3dd117d24e24b498937",
"assets/packages/country_code_picker/i18n/ko.json": "76484ad0eb25412d4c9be010bca5baf0",
"assets/packages/country_code_picker/i18n/ku.json": "4c743e7dd3d124cb83602d20205d887c",
"assets/packages/country_code_picker/i18n/ky.json": "51dff3d9ff6de3775bc0ffeefe6d36cb",
"assets/packages/country_code_picker/i18n/lt.json": "21cacbfa0a4988d180feb3f6a2326660",
"assets/packages/country_code_picker/i18n/lv.json": "1c83c9664e00dce79faeeec714729a26",
"assets/packages/country_code_picker/i18n/mk.json": "899e90341af48b31ffc8454325b454b2",
"assets/packages/country_code_picker/i18n/ml.json": "096da4f99b9bd77d3fe81dfdc52f279f",
"assets/packages/country_code_picker/i18n/mn.json": "6f69ca7a6a08753da82cb8437f39e9a9",
"assets/packages/country_code_picker/i18n/ms.json": "826babac24d0d842981eb4d5b2249ad6",
"assets/packages/country_code_picker/i18n/nb.json": "c0f89428782cd8f5ab172621a00be3d0",
"assets/packages/country_code_picker/i18n/nl.json": "20d4bf89d3aa323f7eb448a501f487e1",
"assets/packages/country_code_picker/i18n/nn.json": "129e66510d6bcb8b24b2974719e9f395",
"assets/packages/country_code_picker/i18n/no.json": "7a5ef724172bd1d2515ac5d7b0a87366",
"assets/packages/country_code_picker/i18n/pl.json": "78cbb04b3c9e7d27b846ee6a5a82a77b",
"assets/packages/country_code_picker/i18n/ps.json": "ab8348fd97d6ceddc4a509e330433caa",
"assets/packages/country_code_picker/i18n/pt.json": "bd7829884fd97de8243cba4257ab79b2",
"assets/packages/country_code_picker/i18n/ro.json": "c38a38f06203156fbd31de4daa4f710a",
"assets/packages/country_code_picker/i18n/ru.json": "aaf6b2672ef507944e74296ea719f3b2",
"assets/packages/country_code_picker/i18n/sd.json": "281e13e4ec4df824094e1e64f2d185a7",
"assets/packages/country_code_picker/i18n/sk.json": "3c52ed27adaaf54602fba85158686d5a",
"assets/packages/country_code_picker/i18n/sl.json": "4a88461ce43941d4a52594a65414e98f",
"assets/packages/country_code_picker/i18n/so.json": "09e1f045e22b85a7f54dd2edc446b0e8",
"assets/packages/country_code_picker/i18n/sq.json": "0aa6432ab040153355d88895aa48a72f",
"assets/packages/country_code_picker/i18n/sr.json": "69a10a0b63edb61e01bc1ba7ba6822e4",
"assets/packages/country_code_picker/i18n/sv.json": "7a6a6a8a91ca86bb0b9e7f276d505896",
"assets/packages/country_code_picker/i18n/ta.json": "48b6617bde902cf72e0ff1731fadfd07",
"assets/packages/country_code_picker/i18n/tg.json": "5512d16cb77eb6ba335c60b16a22578b",
"assets/packages/country_code_picker/i18n/th.json": "721b2e8e586eb7c7da63a18b5aa3a810",
"assets/packages/country_code_picker/i18n/tr.json": "d682217c3ccdd9cc270596fe1af7a182",
"assets/packages/country_code_picker/i18n/tt.json": "e3687dceb189c2f6600137308a11b22f",
"assets/packages/country_code_picker/i18n/ug.json": "e2be27143deb176fa325ab9b229d8fd8",
"assets/packages/country_code_picker/i18n/uk.json": "a7069f447eb0060aa387a649e062c895",
"assets/packages/country_code_picker/i18n/ur.json": "b5bc6921e006ae9292ed09e0eb902716",
"assets/packages/country_code_picker/i18n/uz.json": "00e22e3eb3a7198f0218780f2b04369c",
"assets/packages/country_code_picker/i18n/vi.json": "fa3d9a3c9c0d0a20d0bd5e6ac1e97835",
"assets/packages/country_code_picker/i18n/zh.json": "44a9040959b2049350bbff0696b84d45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.jpg": "52e55fc58fbc1f7cb39e4886c1742938",
"firebase-messaging-sw.js": "27348c6382427f67125cf5c37b0e71f2",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"img/background.png": "e96f5d3fb098b46b40cd8e0800c39484",
"index.html": "91dd70775943cf8075e589c6c5e9ad8a",
"/": "91dd70775943cf8075e589c6c5e9ad8a",
"main.dart.js": "b28c2ad9617d1f1302a852bfbc0b03eb",
"manifest.json": "97c08692a7a8e9d674447dc1dc529b85",
"styles.css": "4a877d8969a12c8abe14d110022b5a59",
"version.json": "dce1fc895730b3656b0881034b2a8513"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
