import { useState } from "react";

const STANDARDS = [
  // ========== 이해 영역 (01-01 ~ 01-10) ==========
  { 
    code:"9영01-01", 
    domain:"이해", 
    title:"단어, 어구, 문장을 듣고 연음이나 축약된 소리를 식별한다.", 
    evalElement:"연음 및 축약된 소리 식별하기", 
    evalType:["형성평가","듣기 수행평가","지필평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"지필 서술형",text:"다음 문장을 듣고, 소리가 연결되어 들리는 부분을 모두 찾아 밑줄을 긋고, 연음 규칙을 설명하시오."},
      {level:"A",type:"수행평가",text:"주어진 문장을 듣고 연음이 일어나는 위치를 표시한 후, 직접 자연스럽게 발음해 보시오."},
      {level:"B",type:"지필 선택형",text:"다음 대화를 듣고, 빈칸에 들어갈 알맞은 축약형을 고르시오."},
      {level:"B",type:"지필 서술형",text:"다음 문장을 듣고, 연음이 일어나는 부분을 찾아 표시하시오."},
      {level:"C",type:"지필 선택형",text:"다음 두 문장을 듣고, 축약형이 사용된 문장을 고르시오."},
      {level:"C",type:"지필 선택형",text:"다음을 듣고, 'want to'가 어떻게 발음되는지 고르시오."},
      {level:"D",type:"지필 선택형",text:"다음 문장에서 연음이 일어나는 곳은? (보기에서 선택)"},
      {level:"D",type:"지필 선택형",text:"다음 중 축약형 'I'm'이 들리는 문장은?"},
      {level:"E",type:"지필 선택형",text:"다음 단어를 듣고, 같은 소리로 시작하는 것을 고르시오."},
      {level:"E",type:"지필 선택형",text:"'It is'를 줄여서 말한 것을 고르시오."}
    ], 
    levels:{A:"연음이나 축약된 소리를 정확하게 식별하고 규칙을 설명할 수 있다.",B:"연음이나 축약된 소리를 비교적 정확하게 식별할 수 있다.",C:"연음이나 축약된 소리를 대략적으로 식별할 수 있다.",D:"연음이나 축약된 소리를 부분적으로 식별할 수 있다.",E:"연음이나 축약된 소리를 제한적으로 식별할 수 있다."} 
  },
  { 
    code:"9영01-02", 
    domain:"이해", 
    title:"친숙한 주제에 관한 담화나 글에서 세부 정보를 파악한다.", 
    evalElement:"세부 정보 파악하기", 
    evalType:["형성평가","지필 선택형","지필 서술형","수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"지필 선택형",text:"윗글의 내용과 일치하지 않는 것은?"},
      {level:"A",type:"지필 서술형",text:"본문을 읽고, 주인공이 여행을 떠난 이유, 방문한 장소, 느낀 점을 각각 영어로 쓰시오."},
      {level:"A",type:"지필 선택형",text:"다음 글에서 언급되지 않은 것은?"},
      {level:"B",type:"지필 선택형",text:"윗글에 대한 설명으로 적절한 것은?"},
      {level:"B",type:"지필 서술형",text:"본문에서 행사의 날짜, 장소, 참가 방법을 찾아 우리말로 쓰시오."},
      {level:"C",type:"지필 서술형",text:"질문에 대한 답을 본문에서 찾아 완전한 영어 문장으로 쓰시오."},
      {level:"C",type:"지필 선택형",text:"다음 대화에서 여자가 원하는 것은?"},
      {level:"D",type:"지필 선택형",text:"(A)~(E) 중 가리키는 대상이 다른 하나는?"},
      {level:"D",type:"지필 선택형",text:"밑줄 친 'it'이 가리키는 것은?"},
      {level:"E",type:"지필 선택형",text:"밑줄 친 단어의 의미로 가장 적절한 것은?"},
      {level:"E",type:"지필 선택형",text:"다음 글에서 'she'가 가리키는 사람은?"}
    ], 
    levels:{A:"세부 정보를 정확하게 파악할 수 있다.",B:"세부 정보를 비교적 정확하게 파악할 수 있다.",C:"세부 정보를 대략적으로 파악할 수 있다.",D:"세부 정보를 부분적으로 파악할 수 있다.",E:"세부 정보를 제한적으로 파악할 수 있다."} 
  },
  { 
    code:"9영01-03", 
    domain:"이해", 
    title:"친숙한 주제에 관한 담화나 글의 중심 내용을 파악한다.", 
    evalElement:"줄거리, 주제, 요지 등의 중심 내용 파악하기", 
    evalType:["형성평가","지필 선택형","지필 서술형","수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"지필 선택형",text:"윗글의 주제로 가장 적절한 것은?"},
      {level:"A",type:"지필 서술형",text:"윗글의 주제문을 찾아 쓰고, 이를 뒷받침하는 근거 두 가지를 우리말로 요약하시오."},
      {level:"B",type:"지필 선택형",text:"윗글의 요지로 가장 적절한 것은?"},
      {level:"B",type:"지필 서술형",text:"윗글이 전달하고자 하는 메시지를 한 문장으로 쓰시오."},
      {level:"C",type:"지필 선택형",text:"다음 글의 제목으로 가장 적절한 것은?"},
      {level:"C",type:"지필 서술형",text:"윗글의 중심 내용을 우리말로 간략히 쓰시오."},
      {level:"D",type:"지필 선택형",text:"다음 글의 내용을 한 문장으로 요약할 때 빈칸에 들어갈 말은?"},
      {level:"E",type:"지필 선택형",text:"다음 글은 무엇에 관한 것인가?"}
    ], 
    levels:{A:"중심 내용을 정확하게 파악할 수 있다.",B:"중심 내용을 비교적 정확하게 파악할 수 있다.",C:"중심 내용을 대략적으로 파악할 수 있다.",D:"중심 내용을 부분적으로 파악할 수 있다.",E:"중심 내용을 제한적으로 파악할 수 있다."} 
  },
  { 
    code:"9영01-04", 
    domain:"이해", 
    title:"친숙한 주제에 관한 담화나 글에서 일이나 사건의 논리적 관계를 파악한다.", 
    evalElement:"순서, 전후 관계, 원인과 결과 등의 논리적 관계 파악하기", 
    evalType:["형성평가","지필 선택형","지필 서술형","수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"지필 선택형",text:"다음 글 다음에 이어질 내용으로 가장 적절한 것은?"},
      {level:"A",type:"지필 서술형",text:"윗글의 사건을 시간 순서대로 정리하고, 각 사건의 인과관계를 영어로 설명하시오."},
      {level:"B",type:"지필 선택형",text:"주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?"},
      {level:"B",type:"지필 서술형",text:"윗글에서 원인과 결과를 찾아 우리말로 쓰시오."},
      {level:"C",type:"지필 선택형",text:"밑줄 친 ⓐ와 같이 말한 이유로 가장 적절한 것은?"},
      {level:"C",type:"지필 선택형",text:"빈칸에 들어갈 연결어로 가장 적절한 것은?"},
      {level:"D",type:"지필 선택형",text:"글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳은?"},
      {level:"E",type:"지필 선택형",text:"다음 글에서 전체 흐름과 관계 없는 문장은?"}
    ], 
    levels:{A:"논리적 관계를 정확하게 파악할 수 있다.",B:"논리적 관계를 비교적 정확하게 파악할 수 있다.",C:"논리적 관계를 대략적으로 파악할 수 있다.",D:"논리적 관계를 부분적으로 파악할 수 있다.",E:"논리적 관계를 제한적으로 파악할 수 있다."} 
  },
  { 
    code:"9영01-05", 
    domain:"이해", 
    title:"친숙한 주제에 관한 담화나 글에서 인물의 기분이나 감정을 추론한다.", 
    evalElement:"기분이나 감정 추론하기", 
    evalType:["형성평가","지필 선택형","지필 서술형","수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"지필 선택형",text:"다음 글에서 'I'의 심경 변화로 가장 적절한 것은?"},
      {level:"A",type:"지필 서술형",text:"주인공의 감정이 어떻게 변화했는지, 그 이유와 함께 영어로 설명하시오."},
      {level:"B",type:"지필 선택형",text:"다음 글의 분위기로 가장 적절한 것은?"},
      {level:"B",type:"지필 서술형",text:"인물이 이렇게 느낀 이유를 본문에서 찾아 쓰시오."},
      {level:"C",type:"지필 선택형",text:"다음 대화에서 여자의 심정으로 가장 적절한 것은?"},
      {level:"C",type:"지필 선택형",text:"이 글의 전체적인 분위기는?"},
      {level:"D",type:"지필 선택형",text:"다음 글에서 Peter가 화가 난 이유로 가장 적절한 것은?"},
      {level:"E",type:"지필 선택형",text:"다음 대화에서 주인공이 슬픈 이유로 가장 적절한 것은?"}
    ], 
    levels:{A:"기분이나 감정을 정확하게 추론할 수 있다.",B:"기분이나 감정을 비교적 정확하게 추론할 수 있다.",C:"기분이나 감정을 대략적으로 추론할 수 있다.",D:"기분이나 감정을 부분적으로 추론할 수 있다.",E:"기분이나 감정을 제한적으로 추론할 수 있다."} 
  },
  { 
    code:"9영01-06", 
    domain:"이해", 
    title:"친숙한 주제에 관한 담화나 글에서 화자나 필자의 의도나 목적을 추론한다.", 
    evalElement:"의도나 목적 추론하기", 
    evalType:["형성평가","지필 선택형","지필 서술형","수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"지필 선택형",text:"다음 광고문의 목적으로 가장 적절한 것은?"},
      {level:"A",type:"지필 서술형",text:"필자가 이 글을 쓴 목적과 예상 독자를 추론하여 영어로 쓰시오."},
      {level:"B",type:"지필 선택형",text:"다음 이메일의 목적으로 가장 적절한 것은?"},
      {level:"B",type:"지필 서술형",text:"이 안내문이 작성된 목적을 우리말로 쓰시오."},
      {level:"C",type:"지필 선택형",text:"다음 글의 목적으로 가장 적절한 것은?"},
      {level:"C",type:"지필 선택형",text:"화자가 청자에게 바라는 것은?"},
      {level:"D",type:"지필 선택형",text:"다음 대화의 밑줄 친 ⓐ의 의도로 가장 적절한 것은?"},
      {level:"E",type:"지필 서술형",text:"화자가 이 말을 한 목적을 우리말로 쓰시오."}
    ], 
    levels:{A:"의도나 목적을 정확하게 추론할 수 있다.",B:"의도나 목적을 비교적 정확하게 추론할 수 있다.",C:"의도나 목적을 대략적으로 추론할 수 있다.",D:"의도나 목적을 부분적으로 추론할 수 있다.",E:"의도나 목적을 제한적으로 추론할 수 있다."} 
  },
  { 
    code:"9영01-07", 
    domain:"이해", 
    title:"단어, 어구, 문장의 함축적 의미를 추론한다.", 
    evalElement:"함축적 의미 추론하기", 
    evalType:["형성평가","지필 선택형","지필 서술형","수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"지필 선택형",text:"밑줄 친 표현이 의미하는 바로 가장 적절한 것은?"},
      {level:"A",type:"지필 서술형",text:"밑줄 친 비유적 표현의 의미를 문맥을 근거로 설명하시오."},
      {level:"B",type:"지필 선택형",text:"다음 대화에서 밑줄 친 말이 암시하는 것은?"},
      {level:"B",type:"지필 서술형",text:"밑줄 친 관용 표현의 의미를 우리말로 쓰시오."},
      {level:"C",type:"지필 서술형",text:"밑줄 친 문장이 함축하는 의미를 우리말로 쓰시오."},
      {level:"C",type:"지필 선택형",text:"'a piece of cake'가 이 문맥에서 의미하는 것은?"},
      {level:"D",type:"지필 선택형",text:"다음 속담이 의미하는 바와 가장 가까운 것은?"},
      {level:"E",type:"지필 선택형",text:"밑줄 친 'it'이 가리키는 것으로 가장 적절한 것은?"}
    ], 
    levels:{A:"함축적 의미를 정확하게 추론할 수 있다.",B:"함축적 의미를 비교적 정확하게 추론할 수 있다.",C:"함축적 의미를 대략적으로 추론할 수 있다.",D:"함축적 의미를 부분적으로 추론할 수 있다.",E:"함축적 의미를 제한적으로 추론할 수 있다."} 
  },
  { code:"9영01-08", domain:"이해", title:"적절한 전략을 활용하여 다양한 매체로 표현된 담화나 글을 듣거나 읽는다.", evalElement:"전략 활용하기", evalType:["형성평가","수행평가"], isSupport:true, questions:[], levels:{A:"전략을 정확하게 활용할 수 있다.",B:"전략을 비교적 정확하게 활용할 수 있다.",C:"전략을 대략적으로 활용할 수 있다.",D:"전략을 부분적으로 활용할 수 있다.",E:"전략을 제한적으로 활용할 수 있다."} },
  { code:"9영01-09", domain:"이해", title:"다양한 관점을 존중하는 태도로 듣거나 읽는다.", evalElement:"존중하는 태도", evalType:["형성평가","수행평가"], isSupport:true, questions:[], levels:{A:"존중하는 태도를 훌륭하게 보여줄 수 있다.",B:"존중하는 태도를 잘 보여줄 수 있다.",C:"존중하는 태도를 보여줄 수 있다.",D:"존중하는 태도를 부분적으로 보여줄 수 있다.",E:"존중하는 태도를 제한적으로 보여줄 수 있다."} },
  { code:"9영01-10", domain:"이해", title:"자신의 관심사에 관한 다양한 담화나 글을 선택하여 적극적으로 듣거나 읽는다.", evalElement:"적극적인 듣기/읽기", evalType:["형성평가","수행평가"], isSupport:true, questions:[], levels:{A:"적극적으로 듣거나 읽을 수 있다.",B:"비교적 적극적으로 듣거나 읽을 수 있다.",C:"대략적으로 듣거나 읽을 수 있다.",D:"부분적으로 듣거나 읽을 수 있다.",E:"제한적으로 듣거나 읽을 수 있다."} },

  // ========== 표현 영역 (02-01 ~ 02-11) ==========
  { 
    code:"9영02-01", 
    domain:"표현", 
    title:"연음이나 축약된 소리를 활용하여 단어, 어구, 문장을 말한다.", 
    evalElement:"연음이나 축약된 소리 활용하여 말하기", 
    evalType:["말하기 수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"수행평가",text:"다음 대화문을 자연스러운 연음과 축약을 모두 살려 역할극으로 발표하시오."},
      {level:"B",type:"수행평가",text:"다음 문장을 자연스러운 연음과 축약을 사용하여 말해 보시오."},
      {level:"C",type:"수행평가",text:"다음 문장에서 축약형을 사용하여 말해 보시오."},
      {level:"D",type:"수행평가",text:"교사의 발음을 듣고 따라 말해 보시오."},
      {level:"E",type:"수행평가",text:"주어진 단어를 연결하여 말해 보시오."}
    ], 
    levels:{A:"연음이나 축약을 정확하게 활용하여 말할 수 있다.",B:"연음이나 축약을 비교적 정확하게 활용하여 말할 수 있다.",C:"연음이나 축약을 대략적으로 활용하여 말할 수 있다.",D:"연음이나 축약을 부분적으로 활용하여 말할 수 있다.",E:"연음이나 축약을 제한적으로 활용하여 말할 수 있다."} 
  },
  { 
    code:"9영02-02", 
    domain:"표현", 
    title:"대상이나 인물의 감정을 묘사한다.", 
    evalElement:"감정 묘사하기, 어휘와 언어 형식 활용하기", 
    evalType:["형성평가","지필 선택형","지필 서술형","수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"지필 서술형",text:"다음 그림 속 인물의 감정을 다양한 형용사와 이유를 포함하여 다섯 문장 이상의 영어로 묘사하시오."},
      {level:"B",type:"지필 서술형",text:"다음 그림 속 인물의 감정을 세 문장 이상의 영어로 묘사하시오."},
      {level:"C",type:"지필 선택형",text:"다음 빈칸에 들어갈 감정을 나타내는 표현으로 적절한 것은?"},
      {level:"D",type:"수행평가",text:"그림을 보고 인물의 기분을 한 문장으로 말해 보시오."},
      {level:"E",type:"지필 선택형",text:"다음 중 'happy'와 비슷한 의미의 단어는?"}
    ], 
    levels:{A:"감정을 정확하게 묘사할 수 있다.",B:"감정을 비교적 정확하게 묘사할 수 있다.",C:"감정을 대략적으로 묘사할 수 있다.",D:"감정을 부분적으로 묘사할 수 있다.",E:"감정을 제한적으로 묘사할 수 있다."} 
  },
  { 
    code:"9영02-03", 
    domain:"표현", 
    title:"친숙한 주제에 관해 사실적 정보를 설명한다.", 
    evalElement:"사실적 정보 설명하기, 어휘와 언어형식 활용하기", 
    evalType:["형성평가","지필 선택형","지필 서술형","수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"지필 선택형",text:"<보기>의 (A)와 (B) 빈칸에 들어갈 말이 적절하게 짝지어진 것은?"},
      {level:"A",type:"수행평가",text:"자신이 조사한 주제에 대해 5분 이상 영어로 프레젠테이션 하시오."},
      {level:"B",type:"지필 선택형",text:"다음 의미에 해당하는 단어로 적절하지 않은 것은?"},
      {level:"B",type:"지필 서술형",text:"다음 그래프를 보고 정보를 세 문장으로 설명하시오."},
      {level:"C",type:"지필 선택형",text:"문맥상 낱말의 쓰임이 적절하지 않은 것은?"},
      {level:"D",type:"지필 서술형",text:"주어진 문법을 활용하여 다음 그림을 설명하시오."},
      {level:"E",type:"지필 서술형",text:"윗글에서 대상의 특징을 한 문장으로 서술하시오."}
    ], 
    levels:{A:"사실적 정보를 정확하게 설명할 수 있다.",B:"사실적 정보를 비교적 정확하게 설명할 수 있다.",C:"사실적 정보를 대략적으로 설명할 수 있다.",D:"사실적 정보를 부분적으로 설명할 수 있다.",E:"사실적 정보를 제한적으로 설명할 수 있다."} 
  },
  { 
    code:"9영02-04", 
    domain:"표현", 
    title:"친숙한 주제에 관해 경험이나 계획을 설명한다.", 
    evalElement:"경험이나 계획 설명하기, 어휘와 언어형식 활용하기", 
    evalType:["형성평가","지필 선택형","지필 서술형","수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"수행평가",text:"지난 방학에 한 일과 다음 방학 계획을 비교하여 다섯 문장 이상으로 발표하시오."},
      {level:"B",type:"지필 서술형",text:"주어진 표현을 사용하여 자신의 주말 계획을 세 문장으로 쓰시오."},
      {level:"C",type:"지필 서술형",text:"다음 질문에 자신의 경험을 바탕으로 영어로 답하시오."},
      {level:"D",type:"지필 선택형",text:"다음 빈칸에 들어갈 표현으로 가장 적절한 것은?"},
      {level:"E",type:"수행평가",text:"어제 한 일을 한 문장으로 말해 보시오."}
    ], 
    levels:{A:"경험이나 계획을 정확하게 설명할 수 있다.",B:"경험이나 계획을 비교적 정확하게 설명할 수 있다.",C:"경험이나 계획을 대략적으로 설명할 수 있다.",D:"경험이나 계획을 부분적으로 설명할 수 있다.",E:"경험이나 계획을 제한적으로 설명할 수 있다."} 
  },
  { 
    code:"9영02-05", 
    domain:"표현", 
    title:"친숙한 주제에 관해 일이나 사건의 논리적 관계를 설명한다.", 
    evalElement:"논리적 관계 설명하기, 어휘와 언어형식 활용하기", 
    evalType:["형성평가","지필 선택형","지필 서술형","수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"지필 서술형",text:"다음 사건들의 인과관계를 다양한 연결어를 사용하여 다섯 문장 이상으로 설명하시오."},
      {level:"B",type:"지필 서술형",text:"주어진 그림을 순서대로 설명하는 글을 쓰시오."},
      {level:"C",type:"지필 선택형",text:"다음 빈칸에 들어갈 연결어로 가장 적절한 것은?"},
      {level:"D",type:"지필 선택형",text:"다음 문장을 논리적 순서에 맞게 배열한 것은?"},
      {level:"E",type:"지필 선택형",text:"다음 중 원인을 나타내는 표현은?"}
    ], 
    levels:{A:"논리적 관계를 정확하게 설명할 수 있다.",B:"논리적 관계를 비교적 정확하게 설명할 수 있다.",C:"논리적 관계를 대략적으로 설명할 수 있다.",D:"논리적 관계를 부분적으로 설명할 수 있다.",E:"논리적 관계를 제한적으로 설명할 수 있다."} 
  },
  { 
    code:"9영02-06", 
    domain:"표현", 
    title:"친숙한 주제에 관해 자신의 의견을 주장한다.", 
    evalElement:"의견 주장하기, 어휘와 언어형식 활용하기", 
    evalType:["형성평가","지필 선택형","지필 서술형","수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"수행평가",text:"주어진 주제에 대해 자신의 입장을 정하고, 세 가지 이상의 근거를 들어 2분 이상 발표하시오."},
      {level:"B",type:"지필 선택형",text:"윗글에서 주인공이 주장하고자 하는 내용은?"},
      {level:"C",type:"수행평가",text:"글의 주제에 대해 찬성 또는 반대 입장을 설정하고, 자신의 의견을 세 문장으로 작성하시오."},
      {level:"D",type:"지필 서술형",text:"다음 주제에 대한 자신의 의견을 한 문장으로 쓰시오."},
      {level:"E",type:"지필 선택형",text:"다음 중 의견을 나타내는 표현은?"}
    ], 
    levels:{A:"자신의 의견을 명확하게 주장할 수 있다.",B:"자신의 의견을 비교적 명확하게 주장할 수 있다.",C:"자신의 의견을 대략적으로 주장할 수 있다.",D:"자신의 의견을 부분적으로 주장할 수 있다.",E:"자신의 의견을 제한적으로 주장할 수 있다."} 
  },
  { 
    code:"9영02-07", 
    domain:"표현", 
    title:"친숙한 주제에 관해 듣거나 읽고 내용을 요약한다.", 
    evalElement:"요약하기, 어휘와 언어형식 활용하기", 
    evalType:["형성평가","지필 선택형","지필 서술형","수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"지필 서술형",text:"윗글의 내용을 핵심 정보를 모두 포함하여 다섯 문장 이내의 영어로 요약하시오."},
      {level:"B",type:"지필 서술형",text:"다음 글을 읽고 핵심 내용을 두 문장으로 요약하시오."},
      {level:"C",type:"지필 선택형",text:"다음 글의 요약문으로 가장 적절한 것은?"},
      {level:"D",type:"지필 선택형",text:"다음 요약문의 빈칸에 들어갈 말로 적절한 것은?"},
      {level:"E",type:"지필 선택형",text:"다음 글의 핵심 단어로 적절한 것은?"}
    ], 
    levels:{A:"내용을 정확하게 요약할 수 있다.",B:"내용을 비교적 정확하게 요약할 수 있다.",C:"내용을 대략적으로 요약할 수 있다.",D:"내용을 부분적으로 요약할 수 있다.",E:"내용을 제한적으로 요약할 수 있다."} 
  },
  { 
    code:"9영02-08", 
    domain:"표현", 
    title:"간단한 일기, 편지, 이메일 등의 글을 쓴다.", 
    evalElement:"일기, 편지, 이메일 등의 글 쓰기", 
    evalType:["형성평가","지필 선택형","지필 서술형","수행평가"], 
    isSupport:false, 
    questions:[
      {level:"A",type:"수행평가",text:"외국인 친구에게 한국 문화를 소개하고 방문을 초대하는 이메일을 다섯 문장 이상으로 쓰시오."},
      {level:"B",type:"지필 서술형",text:"주어진 상황에 맞는 편지를 세 문장 이상으로 쓰시오."},
      {level:"C",type:"지필 서술형",text:"오늘 하루를 돌아보는 일기를 세 문장으로 쓰시오."},
      {level:"D",type:"지필 선택형",text:"다음 이메일의 빈칸에 들어갈 표현으로 적절한 것은?"},
      {level:"E",type:"지필 선택형",text:"다음 중 편지의 끝인사로 적절한 것은?"}
    ], 
    levels:{A:"일기, 편지, 이메일을 정확하게 쓸 수 있다.",B:"일기, 편지, 이메일을 비교적 정확하게 쓸 수 있다.",C:"일기, 편지, 이메일을 대략적으로 쓸 수 있다.",D:"일기, 편지, 이메일을 부분적으로 쓸 수 있다.",E:"일기, 편지, 이메일을 제한적으로 쓸 수 있다."} 
  },
  { code:"9영02-09", domain:"표현", title:"적절한 매체를 활용하여 정보 윤리를 준수하며 말하거나 쓴다.", evalElement:"매체 활용하기, 정보 윤리 준수하기", evalType:["형성평가","수행평가"], isSupport:true, questions:[], levels:{A:"정보 윤리를 훌륭하게 준수할 수 있다.",B:"정보 윤리를 잘 준수할 수 있다.",C:"정보 윤리를 준수할 수 있다.",D:"정보 윤리를 부분적으로 준수할 수 있다.",E:"정보 윤리를 제한적으로 준수할 수 있다."} },
  { code:"9영02-10", domain:"표현", title:"적절한 전략을 활용하여 상황이나 목적에 맞게 말하거나 쓴다.", evalElement:"상황이나 목적에 맞게 말하기/쓰기", evalType:["형성평가","수행평가"], isSupport:true, questions:[], levels:{A:"상황에 맞게 정확하게 말하거나 쓸 수 있다.",B:"상황에 맞게 비교적 정확하게 말하거나 쓸 수 있다.",C:"상황에 맞게 대략적으로 말하거나 쓸 수 있다.",D:"상황에 맞게 부분적으로 말하거나 쓸 수 있다.",E:"상황에 맞게 제한적으로 말하거나 쓸 수 있다."} },
  { code:"9영02-11", domain:"표현", title:"상대방을 배려하는 태도로 말하거나 쓴다.", evalElement:"배려하는 태도 보이기", evalType:["형성평가","수행평가"], isSupport:true, questions:[], levels:{A:"배려하는 태도를 훌륭하게 보여줄 수 있다.",B:"배려하는 태도를 잘 보여줄 수 있다.",C:"배려하는 태도를 보여줄 수 있다.",D:"배려하는 태도를 부분적으로 보여줄 수 있다.",E:"배려하는 태도를 제한적으로 보여줄 수 있다."} },
];

const LC={A:"#e63946",B:"#f4a261",C:"#2a9d8f",D:"#457b9d",E:"#9b72cf"};
const LB={A:"#fde8e8",B:"#fef3e2",C:"#e0f4f2",D:"#e2edf5",E:"#f0ebfa"};

function Badge({level}) {
  return <div className="flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold font-mono flex-shrink-0" style={{background:LB[level],color:LC[level]}}>{level}</div>;
}

export default function App() {
  const [code, setCode] = useState(null);
  const [lv, setLv] = useState("ALL");
  const [domain, setDomain] = useState("ALL");
  const [q, setQ] = useState("");

  const filtered = STANDARDS.filter(s =>
    (domain==="ALL"||s.domain===domain) &&
    (!q||s.code.includes(q)||s.title.includes(q)||s.evalElement.includes(q))
  );
  const std = STANDARDS.find(s=>s.code===code);
  const dispLvs = lv==="ALL"?["A","B","C","D","E"]:[lv];
  const filtQs = std ? std.questions.filter(qItem=>lv==="ALL"||qItem.level===lv) : [];
  const totalQuestions = std ? std.questions.length : 0;

  return (
    <div className="flex flex-col h-screen bg-stone-100 font-sans text-sm">
      <div className="bg-emerald-800 text-white p-3 sticky top-0 z-50">
        <div className="font-bold text-base">2022 개정 영어 성취기준 평가발문기</div>
        <div className="text-xs opacity-80 mt-0.5">중학교 · 이해 10개 + 표현 11개 · 풍부한 샘플 발문</div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 bg-white border-r border-gray-200 p-3 overflow-y-auto flex-shrink-0">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="검색..." className="w-full p-2 border border-gray-300 rounded-lg text-sm mb-3 bg-stone-50"/>

          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">영역</div>
          {[["ALL","전체 (21개)"],["이해","이해 (10개)"],["표현","표현 (11개)"]].map(([v,l])=>(
            <button key={v} onClick={()=>setDomain(v)} className={`block w-full text-left p-2 mb-1 rounded-lg text-sm ${domain===v?"bg-emerald-100 text-emerald-800 font-semibold":"text-gray-600 hover:bg-gray-50"}`}>{l}</button>
          ))}

          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">성취수준</div>
          {[["ALL","전체"],["A","A"],["B","B"],["C","C"],["D","D"],["E","E"]].map(([v,l])=>(
            <button key={v} onClick={()=>setLv(v)} className={`flex items-center gap-2 w-full text-left p-2 mb-1 rounded-lg text-sm ${lv===v?"bg-emerald-100 text-emerald-800 font-semibold":"text-gray-600 hover:bg-gray-50"}`}>
              <span className="w-2.5 h-2.5 rounded-full" style={{background:v==="ALL"?"#ccc":LC[v]}}/>{l}수준
            </button>
          ))}

          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 mt-4">성취기준</div>
          {filtered.map(s=>(
            <button key={s.code} onClick={()=>setCode(s.code)} className={`block w-full text-left p-2 mb-1 rounded-lg ${code===s.code?"bg-emerald-100 text-emerald-800":"text-gray-600 hover:bg-gray-50"} ${s.isSupport?"opacity-60":""}`}>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="font-mono text-xs font-semibold">{s.code}</span>
                {s.isSupport && <span className="text-xs bg-orange-400 text-white px-1.5 rounded">보조</span>}
                {!s.isSupport && <span className="text-xs bg-emerald-600 text-white px-1.5 rounded">{s.questions.length}</span>}
              </div>
              <span className="text-xs leading-snug block text-gray-500">{s.title}</span>
            </button>
          ))}
        </div>

        <div className="flex-1 p-5 overflow-y-auto">
          {!std ? (
            <div className="text-center py-16 text-gray-400">
              <div className="text-5xl mb-4">📚</div>
              <div className="text-lg text-gray-500 mb-2">성취기준을 선택하세요</div>
              <div className="text-sm leading-relaxed">성취수준별 다양한 발문 예시를 확인할 수 있습니다.</div>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-xl p-5 mb-5 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg font-mono text-sm font-bold">{std.code}</span>
                  {std.isSupport && <span className="bg-orange-400 text-white px-2 py-1 rounded text-xs">보조</span>}
                  {!std.isSupport && <span className="bg-emerald-600 text-white px-2 py-1 rounded text-xs">{totalQuestions}문항</span>}
                </div>
                <div className="text-lg font-semibold mb-4">{std.title}</div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-gray-600">🎯 {std.evalElement}</span>
                  {std.evalType.map(t=><span key={t} className="text-xs px-3 py-1.5 rounded-full bg-stone-100 text-gray-600">📋 {t}</span>)}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-gray-400 uppercase">샘플 발문</span>
                <span className="flex-1 h-px bg-gray-200"/>
                {!std.isSupport && <span className="text-xs text-gray-500">{filtQs.length}개</span>}
              </div>
              
              <div className="mb-6">
                {std.isSupport ? (
                  <div className="text-center p-6 text-orange-600 text-sm bg-orange-50 rounded-xl border border-orange-200">
                    <div className="text-2xl mb-2">🔗</div>
                    <div className="font-medium">이 성취기준은 다른 성취기준에 추가/보조로 사용됩니다.</div>
                  </div>
                ) : filtQs.length===0 ? (
                  <div className="text-center p-6 text-gray-400 bg-white rounded-xl border">해당 성취수준의 샘플 발문이 없습니다.</div>
                ) : (
                  <div className="space-y-3">
                    {filtQs.map((qItem,i)=>(
                      <div key={i} className="bg-white rounded-xl border p-4 flex gap-3 shadow-sm">
                        <Badge level={qItem.level}/>
                        <div className="flex-1">
                          <span className="text-xs px-2 py-1 rounded bg-stone-100 text-gray-500 inline-block mb-2">{qItem.type}</span>
                          <div className="text-sm leading-relaxed">{qItem.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-gray-400 uppercase">성취수준별 기술</span>
                <span className="flex-1 h-px bg-gray-200"/>
              </div>
              <div className="space-y-2">
                {dispLvs.map(l=>(
                  <div key={l} className="bg-white rounded-xl border p-4 flex gap-3">
                    <Badge level={l}/>
                    <div className="text-sm leading-relaxed text-gray-700">{std.levels[l]}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
