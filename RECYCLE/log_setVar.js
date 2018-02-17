  == Manager 'callme' logged on from 10.100.111.249
  == Using SIP RTP CoS mark 5
       > 0x56474776af90 -- Strict RTP learning after remote address set to: 10.100.111.252:17554
<-- Examining AMI event: -->
Event: Newchannel
Privilege: call,all
SequenceNumber: 7666
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 0
ChannelStateDesc: Down
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: en
AccountCode: 
Context: incoming
Exten: 888999
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7667
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 0
ChannelStateDesc: Down
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: en
AccountCode: 
Context: incoming
Exten: 888999
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: SIPURI
Value: sip:asterisk@10.100.111.252:5060


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7668
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 0
ChannelStateDesc: Down
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: en
AccountCode: 
Context: incoming
Exten: 888999
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: SIPDOMAIN
Value: 10.100.111.249


    -- Executing [888999@incoming:1] Gosub("SIP/toOurAster-000000bb", "recording,~~s~~,1(123,888999)") in new stack
    -- Executing [~~s~~@recording:1] MSet("SIP/toOurAster-000000bb", "LOCAL(calling)=123") in new stack
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7669
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 0
ChannelStateDesc: Down
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: en
AccountCode: 
Context: incoming
Exten: 888999
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: SIPCALLID
Value: 19b2afbd-fbf9-46b8-8072-64bc55594f60


<-- Examining AMI event: -->
Event: Newstate
Privilege: call,all
SequenceNumber: 7670
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: incoming
Exten: 888999
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372


    -- Executing [~~s~~@recording:2] MSet("SIP/toOurAster-000000bb", "LOCAL(called)=888999") in new stack
    -- Executing [~~s~~@recording:3] GotoIf("SIP/toOurAster-000000bb", "1?4:14") in new stack
    -- Goto (recording,~~s~~,4)
    -- Executing [~~s~~@recording:4] Set("SIP/toOurAster-000000bb", "fname=1514295827.372-2017-12-26-14_43-123-888999") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7672
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: incoming
Exten: 888999
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: 888999
Application: Gosub
AppData: recording,~~s~~,1(123,888999)


    -- Executing [~~s~~@recording:5] Set("SIP/toOurAster-000000bb", "datedir=2017/12/26") in new stack
    -- Executing [~~s~~@recording:6] System("SIP/toOurAster-000000bb", "mkdir -p /var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26") in new stack
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7673
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: incoming
Exten: 888999
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: LOCAL(ARG1)
Value: 123


  == Manager 'callme' logged on from 10.100.111.249
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7674
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: incoming
Exten: 888999
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: LOCAL(ARG2)
Value: 888999


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7675
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: incoming
Exten: 888999
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: LOCAL(ARGC)
Value: 2


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7676
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: MSet
AppData: LOCAL(calling)=123


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7677
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: LOCAL(calling)
Value: 123


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7678
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 2
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: MSet
AppData: LOCAL(called)=888999


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7679
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 2
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: LOCAL(called)
Value: 888999


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7680
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 3
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: GotoIf
AppData: 1?4:14


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7674
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: incoming
Exten: 888999
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: LOCAL(ARG2)
Value: 888999


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7681
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 4
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: Set
AppData: fname=1514295827.372-2017-12-26-14_43-123-888999


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7675
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: incoming
Exten: 888999
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: LOCAL(ARGC)
Value: 2


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7676
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: MSet
AppData: LOCAL(calling)=123


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7677
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: LOCAL(calling)
Value: 123


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7678
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 2
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: MSet
AppData: LOCAL(called)=888999


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7679
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 2
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: LOCAL(called)
Value: 888999


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7680
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 3
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: GotoIf
AppData: 1?4:14


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7681
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 4
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: Set
AppData: fname=1514295827.372-2017-12-26-14_43-123-888999


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7682
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 4
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: fname
Value: 1514295827.372-2017-12-26-14_43-123-888999


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7683
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 5
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: Set
AppData: datedir=2017/12/26


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7684
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 5
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: datedir
Value: 2017/12/26


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7685
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 6
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: System
AppData: mkdir -p /var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7682
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 4
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: fname
Value: 1514295827.372-2017-12-26-14_43-123-888999


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7683
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 5
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: Set
AppData: datedir=2017/12/26


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7684
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 5
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: datedir
Value: 2017/12/26


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7685
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 6
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: System
AppData: mkdir -p /var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7687
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 6
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: CallerIDName
Value: ASS_1


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7687
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 6
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: CallerIDName
Value: ASS_1


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7688
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 6
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: SYSTEMSTATUS
Value: SUCCESS


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7688
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 6
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: SYSTEMSTATUS
Value: SUCCESS


    -- Executing [~~s~~@recording:7] System("SIP/toOurAster-000000bb", "mkdir -p /var/www/pbx-aseeva.vistep.ru/callme/records/wav/2017/12/26") in new stack
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7689
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 6
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: ConnectedLineIDName
Value: ASS_2


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7689
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 6
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: ConnectedLineIDName
Value: ASS_2


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7690
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 7
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: System
AppData: mkdir -p /var/www/pbx-aseeva.vistep.ru/callme/records/wav/2017/12/26


  == Manager 'callme' logged off from 10.100.111.249
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7691
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 7
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: SYSTEMSTATUS
Value: SUCCESS


    -- Executing [~~s~~@recording:8] Set("SIP/toOurAster-000000bb", "monopt=nice -n 19 /usr/bin/lame -b 32  --silent "/var/www/pbx-aseeva.vistep.ru/callme/records/wav/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.wav"  "/var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3" && rm -f "/var/www/pbx-aseeva.vistep.ru/callme/records/wav/1514295827.372-2017-12-26-14_43-123-888999.wav" && chmod o+r "/var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3"") in new stack
    -- Executing [~~s~~@recording:9] Set("SIP/toOurAster-000000bb", "FullFname=https://pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3") in new stack
    -- Executing [~~s~~@recording:10] Set("SIP/toOurAster-000000bb", "CDR(filename)=1514295827.372-2017-12-26-14_43-123-888999.mp3") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7692
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 8
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: Set
AppData: monopt=nice -n 19 /usr/bin/lame -b 32  --silent "/var/www/pbx-aseeva.vistep.ru/callme/records/wav/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.wav"  "/var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3" && rm -f "/var/www/pbx-aseeva.vistep.ru/callme/records/wav/1514295827.372-2017-12-26-14_43-123-888999.wav" && chmod o+r "/var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3"


    -- Executing [~~s~~@recording:11] Set("SIP/toOurAster-000000bb", "CDR(recordingfile)=1514295827.372-2017-12-26-14_43-123-888999.wav") in new stack
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7693
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 8
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: monopt
Value: nice -n 19 /usr/bin/lame -b 32  --silent \"/var/www/pbx-aseeva.vistep.ru/callme/records/wav/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.wav\"  \"/var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3\" && rm -f \"/var/www/pbx-aseeva.vistep.ru/callme/records/wav/1514295827.372-2017-12-26-14_43-123-888999.wav\" && chmod o+r \"/var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3\"


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7694
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 9
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: Set
AppData: FullFname=https://pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3


    -- Executing [~~s~~@recording:12] Set("SIP/toOurAster-000000bb", "CDR(realdst)=888999") in new stack
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7695
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 9
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: FullFname
Value: https://pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7696
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 10
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: Set
AppData: CDR(filename)=1514295827.372-2017-12-26-14_43-123-888999.mp3


    -- Executing [~~s~~@recording:13] MixMonitor("SIP/toOurAster-000000bb", "/var/www/pbx-aseeva.vistep.ru/callme/records/wav/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.wav,b,nice -n 19 /usr/bin/lame -b 32  --silent "/var/www/pbx-aseeva.vistep.ru/callme/records/wav/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.wav"  "/var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3" && rm -f "/var/www/pbx-aseeva.vistep.ru/callme/records/wav/1514295827.372-2017-12-26-14_43-123-888999.wav" && chmod o+r "/var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3"") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7697
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: Set
AppData: CDR(recordingfile)=1514295827.372-2017-12-26-14_43-123-888999.wav


    -- Executing [~~s~~@recording:14] NoOp("SIP/toOurAster-000000bb", "Finish if_recording_340") in new stack
    -- Executing [~~s~~@recording:15] Return("SIP/toOurAster-000000bb", "") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7698
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 12
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: Set
AppData: CDR(realdst)=888999


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7699
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 13
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: MixMonitor
AppData: /var/www/pbx-aseeva.vistep.ru/callme/records/wav/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.wav,b,nice -n 19 /usr/bin/lame -b 32  --silent "/var/www/pbx-aseeva.vistep.ru/callme/records/wav/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.wav"  "/var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3" && rm -f "/var/www/pbx-aseeva.vistep.ru/callme/records/wav/1514295827.372-2017-12-26-14_43-123-888999.wav" && chmod o+r "/var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3"


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7700
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 13
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: MIXMONITOR_FILENAME
Value: /var/www/pbx-aseeva.vistep.ru/callme/records/wav/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.wav


    -- Executing [888999@incoming:2] NoOp("SIP/toOurAster-000000bb", "=== RECORDING_FILE_NAME = 1514295827.372-2017-12-26-14_43-123-888999 ===") in new stack
    -- Executing [888999@incoming:3] Gosub("SIP/toOurAster-000000bb", "eeivr,s,1") in new stack
    -- Executing [s@eeivr:1] MSet("SIP/toOurAster-000000bb", "~~EXTEN~~=s") in new stack
    -- Executing [s@eeivr:2] Set("SIP/toOurAster-000000bb", "error_input_1=0") in new stack
    -- Executing [s@eeivr:3] Playback("SIP/toOurAster-000000bb", "silence/1") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7701
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 14
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: NoOp
AppData: Finish if_recording_340


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7702
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 15
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: ~~s~~
Application: Return
AppData: 


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7703
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 15
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: called
Value: 


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7704
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 15
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: calling
Value: 


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7705
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 15
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: ARGC
Value: 


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7706
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 15
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: ARG2
Value: 


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7707
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 15
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: ARG1
Value: 


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7708
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: recording
Exten: ~~s~~
Priority: 15
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: GOSUB_RETVAL
Value: 


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7709
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: incoming
Exten: 888999
Priority: 2
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: 888999
Application: NoOp
AppData: === RECORDING_FILE_NAME = 1514295827.372-2017-12-26-14_43-123-888999 ===


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7710
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: incoming
Exten: 888999
Priority: 3
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: 888999
Application: Gosub
AppData: eeivr,s,1


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7711
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: incoming
Exten: 888999
Priority: 3
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: LOCAL(ARGC)
Value: 0


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7712
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: s
Application: MSet
AppData: ~~EXTEN~~=s


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7713
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: ~~EXTEN~~
Value: s


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7714
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 2
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: s
Application: Set
AppData: error_input_1=0


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7715
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 2
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: error_input_1
Value: 0


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7716
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 4
ChannelStateDesc: Ring
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 3
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: s
Application: Playback
AppData: silence/1


<-- Examining AMI event: -->
Event: Newstate
Privilege: call,all
SequenceNumber: 7717
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 3
Uniqueid: 1514295827.372
Linkedid: 1514295827.372


  == Begin MixMonitor Recording SIP/toOurAster-000000bb
       > 0x56474776af90 -- Strict RTP switching to RTP target address 10.100.111.252:17554 as source
    -- <SIP/toOurAster-000000bb> Playing 'silence/1.alaw' (language 'ru')
    -- Executing [s@eeivr:4] Read("SIP/toOurAster-000000bb", "firststep,ru/ivr/ivr,3") in new stack
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7718
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 3
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: PLAYBACKSTATUS
Value: SUCCESS


    -- Accepting a maximum of 3 digits.
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7719
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 4
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: s
Application: Read
AppData: firststep,ru/ivr/ivr,3


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7720
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 4
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: READSTATUS
Value: ERROR


    -- <SIP/toOurAster-000000bb> Playing 'ru/ivr/ivr.slin' (language 'ru')
       > 0x56474776af90 -- Strict RTP learning complete - Locking on source address 10.100.111.252:17554
<-- Examining AMI event: -->
Event: PeerStatus
Privilege: system,all
SequenceNumber: 7722
File: manager.c
Line: 1836
Func: manager_default_msg_cb
ChannelType: SIP
Peer: SIP/777
PeerStatus: Registered
Address: 192.168.254.253:60182


[Dec 26 14:43:50] NOTICE[9404]: chan_sip.c:24592 handle_response_peerpoke: Peer '777' is now Reachable. (377ms / 2000ms)
<-- Examining AMI event: -->
Event: PeerStatus
Privilege: system,all
SequenceNumber: 7724
File: manager.c
Line: 1836
Func: manager_default_msg_cb
ChannelType: SIP
Peer: SIP/777
PeerStatus: Reachable


<-- Examining AMI event: -->
Event: DeviceStateChange
Privilege: call,all
SequenceNumber: 7725
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Device: SIP/777
State: NOT_INUSE


<-- Examining AMI event: -->
Event: ExtensionStatus
Privilege: call,all
SequenceNumber: 7726
File: manager.c
Line: 7027
Func: manager_state_cb
Exten: 777
Context: default
Hint: SIP/777
Status: 0
StatusText: Idle


<-- Examining AMI event: -->
Event: QueueMemberStatus
Privilege: agent,all
SequenceNumber: 7727
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Queue: Q1
MemberName: SIP/777
Interface: SIP/777
StateInterface: SIP/777
Membership: static
Penalty: 1
CallsTaken: 62
LastCall: 1514295565
InCall: 0
Status: 1
Paused: 0
PausedReason: 
Ringinuse: 0


<-- Examining AMI event: -->
Event: DeviceStateChange
Privilege: call,all
SequenceNumber: 7728
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Device: Queue:Q1_avail
State: NOT_INUSE


<-- Examining AMI event: -->
Event: DTMFBegin
Privilege: dtmf,all
SequenceNumber: 7729
File: manager_channels.c
Line: 899
Func: channel_dtmf_begin_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 4
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Digit: 1
Direction: Received


<-- Examining AMI event: -->
Event: DTMFEnd
Privilege: dtmf,all
SequenceNumber: 7730
File: manager_channels.c
Line: 949
Func: channel_dtmf_end_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 4
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Digit: 1
DurationMs: 120
Direction: Received


<-- Examining AMI event: -->
Event: RTCPReceived
Privilege: reporting,all
SequenceNumber: 7731
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 4
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
To: 10.100.111.249:12183
From: 10.100.111.252:17555
RTT: 0.0000
SSRC: 0x2bfb51ba
PT: 200(SR)
ReportCount: 1
SentNTP: 1514295832.470629
SentRTP: 45760
SentPackets: 256
SentOctets: 39712
Report0SourceSSRC: 0x04935eb1
Report0FractionLost: 0
Report0CumulativeLost: 0
Report0HighestSequence: 586
Report0SequenceNumberCycles: 0
Report0IAJitter: 4
Report0LSR: 0
Report0DLSR: 0.0000


<-- Examining AMI event: -->
Event: RTCPSent
Privilege: reporting,all
SequenceNumber: 7732
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 4
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
To: 10.100.111.252:17555
From: 10.100.111.249:12183
SSRC: 0x04935eb1
PT: 200(SR)
ReportCount: 1
SentNTP: 1514295832.486078
SentRTP: 37280
SentPackets: 233
SentOctets: 37280
Report0SourceSSRC: 0x2bfb51ba
Report0FractionLost: 0
Report0CumulativeLost: 0
Report0HighestSequence: 30028
Report0SequenceNumberCycles: 0
Report0IAJitter: 54
Report0LSR: 3499653243
Report0DLSR: 0.0010


    -- User entered '1'
    -- Executing [s@eeivr:5] Set("SIP/toOurAster-000000bb", "lengthfs=1") in new stack
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7733
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 4
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: firststep
Value: 1


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7734
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 4
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: READSTATUS
Value: TIMEOUT


    -- Executing [s@eeivr:6] GotoIf("SIP/toOurAster-000000bb", "1?7:22") in new stack
    -- Goto (eeivr,s,7)
    -- Executing [s@eeivr:7] AGI("SIP/toOurAster-000000bb", "ivr_numbers_or_shit.py,1") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7735
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 5
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: s
Application: Set
AppData: lengthfs=1


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7736
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 5
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: lengthfs
Value: 1


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7737
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 6
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: s
Application: GotoIf
AppData: 1?7:22


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7738
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 7
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: s
Application: AGI
AppData: ivr_numbers_or_shit.py,1


    -- Launched AGI Script /var/lib/asterisk/agi-bin/ivr_numbers_or_shit.py
    -- AGI Script Executing Application: (Set) Options: (NUMORSHIT=0)
    -- <SIP/toOurAster-000000bb>AGI Script ivr_numbers_or_shit.py completed, returning 0
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7742
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 7
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: NUMORSHIT
Value: 0


    -- Executing [s@eeivr:8] GotoIf("SIP/toOurAster-000000bb", "0?9:21") in new stack
    -- Goto (eeivr,s,21)
    -- Executing [s@eeivr:21] NoOp("SIP/toOurAster-000000bb", "Finish if_if_eeivr_324_325") in new stack
    -- Executing [s@eeivr:22] NoOp("SIP/toOurAster-000000bb", "Finish if_eeivr_324") in new stack
    -- Executing [s@eeivr:23] NoOp("SIP/toOurAster-000000bb", "=== firststep = 1===") in new stack
    -- Executing [s@eeivr:24] NoOp("SIP/toOurAster-000000bb", "=== lengthfs = 1===") in new stack
    -- Executing [s@eeivr:25] Goto("SIP/toOurAster-000000bb", "sw_328_1,10") in new stack
    -- Goto (eeivr,sw_328_1,10)
    -- Executing [sw_328_1@eeivr:10] Playback("SIP/toOurAster-000000bb", "transfer") in new stack
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7744
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 7
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: AGISTATUS
Value: SUCCESS


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7745
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 8
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: s
Application: GotoIf
AppData: 0?9:21


    -- <SIP/toOurAster-000000bb> Playing 'transfer.alaw' (language 'ru')
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7746
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 21
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: s
Application: NoOp
AppData: Finish if_if_eeivr_324_325


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7747
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 22
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: s
Application: NoOp
AppData: Finish if_eeivr_324


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7748
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 23
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: s
Application: NoOp
AppData: === firststep = 1===


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7749
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 24
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: s
Application: NoOp
AppData: === lengthfs = 1===


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7750
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: s
Priority: 25
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: s
Application: Goto
AppData: sw_328_1,10


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7751
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 10
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: sw_328_1
Application: Playback
AppData: transfer


<-- Examining AMI event: -->
Event: RTCPReceived
Privilege: reporting,all
SequenceNumber: 7752
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 10
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
To: 10.100.111.249:12183
From: 10.100.111.252:17555
RTT: 0.0202
SSRC: 0x2bfb51ba
PT: 200(SR)
ReportCount: 1
SentNTP: 1514295837.470868
SentRTP: 85600
SentPackets: 505
SentOctets: 79552
Report0SourceSSRC: 0x04935eb1
Report0FractionLost: 0
Report0CumulativeLost: 0
Report0HighestSequence: 601
Report0SequenceNumberCycles: 0
Report0IAJitter: 2
Report0LSR: 3499654255
Report0DLSR: 4.9790


<-- Examining AMI event: -->
Event: RTCPSent
Privilege: reporting,all
SequenceNumber: 7753
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 10
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
To: 10.100.111.252:17555
From: 10.100.111.249:12183
SSRC: 0x04935eb1
PT: 200(SR)
ReportCount: 1
SentNTP: 1514295837.486158
SentRTP: 80008
SentPackets: 249
SentOctets: 39840
Report0SourceSSRC: 0x2bfb51ba
Report0FractionLost: 0
Report0CumulativeLost: 0
Report0HighestSequence: 30278
Report0SequenceNumberCycles: 0
Report0IAJitter: 50
Report0LSR: 3499980938
Report0DLSR: 0.0000


    -- Executing [sw_328_1@eeivr:11] Queue("SIP/toOurAster-000000bb", "Q1,tTcnF,,,10") in new stack
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7754
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 10
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: PLAYBACKSTATUS
Value: SUCCESS


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7755
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: sw_328_1
Application: Queue
AppData: Q1,tTcnF,,,10


<-- Examining AMI event: -->
Event: DeviceStateChange
Privilege: call,all
SequenceNumber: 7756
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Device: Queue:Q1
State: RINGING


<-- Examining AMI event: -->
Event: QueueCallerJoin
Privilege: agent,all
SequenceNumber: 7757
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Queue: Q1
Position: 1
Count: 1


    -- Started music on hold, class 'default', on channel 'SIP/toOurAster-000000bb'
<-- Examining AMI event: -->
Event: MusicOnHoldStart
Privilege: call,all
SequenceNumber: 7758
File: manager_channels.c
Line: 1072
Func: channel_moh_start_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Class: default


  == Using SIP RTP CoS mark 5
<-- Examining AMI event: -->
Event: Newchannel
Privilege: call,all
SequenceNumber: 7759
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 0
ChannelStateDesc: Down
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: en
AccountCode: 
Context: dial_out
Exten: s
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7760
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 0
ChannelStateDesc: Down
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: en
AccountCode: 
Context: dial_out
Exten: s
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: SIPCALLID
Value: 2ba2c0845dd3dfc91291119725e29640@10.100.111.249:5060


<-- Examining AMI event: -->
Event: DeviceStateChange
Privilege: call,all
SequenceNumber: 7761
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Device: SIP/777
State: RINGING


<-- Examining AMI event: -->
Event: ExtensionStatus
Privilege: call,all
SequenceNumber: 7762
File: manager.c
Line: 7027
Func: manager_state_cb
Exten: 777
Context: default
Hint: SIP/777
Status: 8
StatusText: Ringing


<-- Examining AMI event: -->
Event: QueueMemberStatus
Privilege: agent,all
SequenceNumber: 7763
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Queue: Q1
MemberName: SIP/777
Interface: SIP/777
StateInterface: SIP/777
Membership: static
Penalty: 1
CallsTaken: 62
LastCall: 1514295565
InCall: 0
Status: 6
Paused: 0
PausedReason: 
Ringinuse: 0


<-- Examining AMI event: -->
Event: DeviceStateChange
Privilege: call,all
SequenceNumber: 7764
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Device: Queue:Q1_avail
State: INUSE


    -- Called SIP/777
<-- Examining AMI event: -->
Event: AgentCalled
Privilege: agent,all
SequenceNumber: 7765
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
DestChannel: SIP/777-000000bc
DestChannelState: 0
DestChannelStateDesc: Down
DestCallerIDNum: 777
DestCallerIDName: Romanenko_E.
DestConnectedLineNum: 123
DestConnectedLineName: Eugene R
DestLanguage: ru
DestAccountCode: 
DestContext: dial_out
DestExten: sw_328_1
DestPriority: 1
DestUniqueid: 1514295839.373
DestLinkedid: 1514295827.372
Queue: Q1
Interface: SIP/777
MemberName: SIP/777


<-- Examining AMI event: -->
Event: DialBegin
Privilege: call,all
SequenceNumber: 7766
File: manager_channels.c
Line: 1139
Func: channel_dial_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: <unknown>
ConnectedLineName: <unknown>
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
DestChannel: SIP/777-000000bc
DestChannelState: 0
DestChannelStateDesc: Down
DestCallerIDNum: 777
DestCallerIDName: Romanenko_E.
DestConnectedLineNum: <unknown>
DestConnectedLineName: <unknown>
DestLanguage: ru
DestAccountCode: 
DestContext: dial_out
DestExten: 
DestPriority: 1
DestUniqueid: 1514295839.373
DestLinkedid: 1514295827.372
DialString: SIP/777


<-- Examining AMI event: -->
Event: NewConnectedLine
Privilege: call,all
SequenceNumber: 7767
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372


    -- SIP/777-000000bc is ringing
<-- Examining AMI event: -->
Event: Newstate
Privilege: call,all
SequenceNumber: 7768
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 5
ChannelStateDesc: Ringing
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7769
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 5
ChannelStateDesc: Ringing
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: sw_328_1
Application: AppQueue
AppData: (Outgoing Line)


<-- Examining AMI event: -->
Event: NewConnectedLine
Privilege: call,all
SequenceNumber: 7770
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 5
ChannelStateDesc: Ringing
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372


  == Manager 'callme' logged on from 10.100.111.249
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7772
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: CallerIDName
Value: ASS


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7772
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: CallerIDName
Value: ASS


  == Manager 'callme' logged off from 10.100.111.249
<-- Examining AMI event: -->
Event: RTCPReceived
Privilege: reporting,all
SequenceNumber: 7773
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
To: 10.100.111.249:12183
From: 10.100.111.252:17555
RTT: 0.0195
SSRC: 0x2bfb51ba
PT: 200(SR)
ReportCount: 1
SentNTP: 1514295842.471032
SentRTP: 125600
SentPackets: 754
SentOctets: 119392
Report0SourceSSRC: 0x04935eb1
Report0FractionLost: 0
Report0CumulativeLost: 0
Report0HighestSequence: 850
Report0SequenceNumberCycles: 0
Report0IAJitter: 15
Report0LSR: 3499981940
Report0DLSR: 4.9790


<-- Examining AMI event: -->
Event: RTCPSent
Privilege: reporting,all
SequenceNumber: 7774
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
To: 10.100.111.252:17555
From: 10.100.111.249:12183
SSRC: 0x04935eb1
PT: 200(SR)
ReportCount: 1
SentNTP: 1514295842.484995
SentRTP: 119848
SentPackets: 498
SentOctets: 79680
Report0SourceSSRC: 0x2bfb51ba
Report0FractionLost: 0
Report0CumulativeLost: 0
Report0HighestSequence: 30526
Report0SequenceNumberCycles: 0
Report0IAJitter: 84
Report0LSR: 3500308629
Report0DLSR: 0.0000


<-- Examining AMI event: -->
Event: RTCPReceived
Privilege: reporting,all
SequenceNumber: 7775
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
To: 10.100.111.249:12183
From: 10.100.111.252:17555
RTT: 0.0202
SSRC: 0x2bfb51ba
PT: 200(SR)
ReportCount: 1
SentNTP: 1514295847.471252
SentRTP: 165760
SentPackets: 1005
SentOctets: 159552
Report0SourceSSRC: 0x04935eb1
Report0FractionLost: 0
Report0CumulativeLost: 0
Report0HighestSequence: 1100
Report0SequenceNumberCycles: 0
Report0IAJitter: 2
Report0LSR: 3500309544
Report0DLSR: 4.9800


<-- Examining AMI event: -->
Event: RTCPSent
Privilege: reporting,all
SequenceNumber: 7776
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
To: 10.100.111.252:17555
From: 10.100.111.249:12183
SSRC: 0x04935eb1
PT: 200(SR)
ReportCount: 1
SentNTP: 1514295847.485819
SentRTP: 159848
SentPackets: 748
SentOctets: 119680
Report0SourceSSRC: 0x2bfb51ba
Report0FractionLost: 0
Report0CumulativeLost: 0
Report0HighestSequence: 30777
Report0SequenceNumberCycles: 0
Report0IAJitter: 46
Report0LSR: 3500636324
Report0DLSR: 0.0000


       > 0x7f5b4c0298a0 -- Strict RTP learning after remote address set to: 192.168.254.253:7076
       > 0x7f5b4c0298a0 -- Strict RTP learning after remote address set to: 192.168.254.253:7076
<-- Examining AMI event: -->
Event: ExtensionStatus
Privilege: call,all
SequenceNumber: 7777
File: manager.c
Line: 7027
Func: manager_state_cb
Exten: 777
Context: default
Hint: SIP/777
Status: 1
StatusText: InUse


<-- Examining AMI event: -->
Event: DeviceStateChange
Privilege: call,all
SequenceNumber: 7778
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Device: SIP/777
State: INUSE


<-- Examining AMI event: -->
Event: QueueMemberStatus
Privilege: agent,all
SequenceNumber: 7779
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Queue: Q1
MemberName: SIP/777
Interface: SIP/777
StateInterface: SIP/777
Membership: static
Penalty: 1
CallsTaken: 62
LastCall: 1514295565
InCall: 0
Status: 2
Paused: 0
PausedReason: 
Ringinuse: 0


    -- SIP/777-000000bc answered SIP/toOurAster-000000bb
    -- Stopped music on hold on SIP/toOurAster-000000bb
<-- Examining AMI event: -->
Event: Newstate
Privilege: call,all
SequenceNumber: 7780
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372


<-- Examining AMI event: -->
Event: DialEnd
Privilege: call,all
SequenceNumber: 7781
File: manager_channels.c
Line: 1151
Func: channel_dial_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
DestChannel: SIP/777-000000bc
DestChannelState: 6
DestChannelStateDesc: Up
DestCallerIDNum: 777
DestCallerIDName: Romanenko_E.
DestConnectedLineNum: 123
DestConnectedLineName: Eugene R
DestLanguage: ru
DestAccountCode: 
DestContext: dial_out
DestExten: sw_328_1
DestPriority: 1
DestUniqueid: 1514295839.373
DestLinkedid: 1514295827.372
DialStatus: ANSWER


<-- Examining AMI event: -->
Event: MusicOnHoldStop
Privilege: call,all
SequenceNumber: 7782
File: manager_channels.c
Line: 749
Func: publish_basic_channel_event
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7783
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: MEMBERINTERFACE
Value: SIP/777


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7784
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: MEMBERNAME
Value: SIP/777


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7785
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: MEMBERCALLS
Value: 62


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7786
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: MEMBERLASTCALL
Value: 1514295565


    -- Channel SIP/777-000000bc joined 'simple_bridge' basic-bridge <93a2c2ce-358b-422d-af07-3eb041e5b174>
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7787
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: MEMBERPENALTY
Value: 1


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7788
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: MEMBERDYNAMIC
Value: 0


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7789
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: MEMBERREALTIME
Value: 0


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7790
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: MEMBERINTERFACE
Value: SIP/777


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7791
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: MEMBERNAME
Value: SIP/777


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7792
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: MEMBERCALLS
Value: 62


    -- Channel SIP/toOurAster-000000bb joined 'simple_bridge' basic-bridge <93a2c2ce-358b-422d-af07-3eb041e5b174>
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7793
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: MEMBERLASTCALL
Value: 1514295565


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7794
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: MEMBERPENALTY
Value: 1


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7795
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: MEMBERDYNAMIC
Value: 0


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7796
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: MEMBERREALTIME
Value: 0


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7797
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: QEHOLDTIME
Value: 9


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7798
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: QEORIGINALPOS
Value: 1


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7799
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: QEHOLDTIME
Value: 9


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7800
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: QEORIGINALPOS
Value: 1


<-- Examining AMI event: -->
Event: DeviceStateChange
Privilege: call,all
SequenceNumber: 7801
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Device: Queue:Q1
State: NOT_INUSE


<-- Examining AMI event: -->
Event: QueueCallerLeave
Privilege: agent,all
SequenceNumber: 7802
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Queue: Q1
Position: 1
Count: 0


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7803
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: QUEUEPOSITION
Value: 1


<-- Examining AMI event: -->
Event: AgentConnect
Privilege: agent,all
SequenceNumber: 7804
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
DestChannel: SIP/777-000000bc
DestChannelState: 6
DestChannelStateDesc: Up
DestCallerIDNum: 777
DestCallerIDName: Romanenko_E.
DestConnectedLineNum: 123
DestConnectedLineName: Eugene R
DestLanguage: ru
DestAccountCode: 
DestContext: dial_out
DestExten: sw_328_1
DestPriority: 1
DestUniqueid: 1514295839.373
DestLinkedid: 1514295827.372
Queue: Q1
Interface: SIP/777
MemberName: SIP/777
HoldTime: 9
RingTime: 9


<-- Examining AMI event: -->
Event: BridgeCreate
Privilege: call,all
SequenceNumber: 7805
File: manager_bridges.c
Line: 367
Func: bridge_snapshot_update
BridgeUniqueid: 93a2c2ce-358b-422d-af07-3eb041e5b174
BridgeType: basic
BridgeTechnology: simple_bridge
BridgeCreator: <unknown>
BridgeName: <unknown>
BridgeNumChannels: 0
BridgeVideoSourceMode: none


<-- Examining AMI event: -->
Event: BridgeEnter
Privilege: call,all
SequenceNumber: 7806
File: manager_bridges.c
Line: 428
Func: channel_enter_cb
BridgeUniqueid: 93a2c2ce-358b-422d-af07-3eb041e5b174
BridgeType: basic
BridgeTechnology: simple_bridge
BridgeCreator: <unknown>
BridgeName: <unknown>
BridgeNumChannels: 1
BridgeVideoSourceMode: none
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372


<-- Examining AMI event: -->
Event: BridgeEnter
Privilege: call,all
SequenceNumber: 7807
File: manager_bridges.c
Line: 428
Func: channel_enter_cb
BridgeUniqueid: 93a2c2ce-358b-422d-af07-3eb041e5b174
BridgeType: basic
BridgeTechnology: simple_bridge
BridgeCreator: <unknown>
BridgeName: <unknown>
BridgeNumChannels: 2
BridgeVideoSourceMode: none
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7808
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: BRIDGEPEER
Value: SIP/toOurAster-000000bb


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7809
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: BRIDGEPVTCALLID
Value: 19b2afbd-fbf9-46b8-8072-64bc55594f60


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7810
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: BRIDGEPEER
Value: SIP/777-000000bc


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7811
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: BRIDGEPVTCALLID
Value: 2ba2c0845dd3dfc91291119725e29640@10.100.111.249:5060


       > 0x7f5b4c0298a0 -- Strict RTP switching to RTP target address 192.168.254.253:7076 as source
       > 0x7f5b4c0298a0 -- Strict RTP learning complete - Locking on source address 192.168.254.253:7076
<-- Examining AMI event: -->
Event: RTCPReceived
Privilege: reporting,all
SequenceNumber: 7812
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
To: 10.100.111.249:13707
From: 192.168.254.253:7077
RTT: 0.0000
SSRC: 0xfde2c89b
PT: 200(SR)
ReportCount: 1
SentNTP: 1514295849.863603
SentRTP: 2501231837
SentPackets: 44
SentOctets: 7040
Report0SourceSSRC: 0x7572f4f0
Report0FractionLost: 0
Report0CumulativeLost: 0
Report0HighestSequence: 4655
Report0SequenceNumberCycles: 0
Report0IAJitter: 152
Report0LSR: 0
Report0DLSR: 0.0000


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7813
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: RTPAUDIOQOS
Value: ssrc=737561271;themssrc=737890746;lp=0;rxjitter=0.000000;rxcount=1193;txjitter=0.006167;txcount=900;rlp=0;rtt=0.020187


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7814
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSBRIDGED
Value: ssrc=737561271;themssrc=737890746;lp=0;rxjitter=0.000000;rxcount=1193;txjitter=0.006167;txcount=900;rlp=0;rtt=0.020187


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7815
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSJITTER
Value: minrxjitter=0.000701;maxrxjitter=0.011988;avgrxjitter=0.006176;stdevrxjitter=inf;reported_minjitter=2.000000;reported_maxjitter=15.000000;reported_avgjitter=5.750000;reported_stdevjitter=18.131895;


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7816
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSJITTERBRIDGED
Value: minrxjitter=0.000701;maxrxjitter=0.011988;avgrxjitter=0.006176;stdevrxjitter=inf;reported_minjitter=2.000000;reported_maxjitter=15.000000;reported_avgjitter=5.750000;reported_stdevjitter=18.131895;


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7817
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSLOSS
Value: minrxlost=0.000000;maxrxlost=0.000000;avgrxlost=0.000000;stdevrxlost=0.000000;reported_minlost=0.000000;reported_maxlost=0.000000;reported_avglost=0.000000;reported_stdevlost=0.000000;


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7818
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSLOSSBRIDGED
Value: minrxlost=0.000000;maxrxlost=0.000000;avgrxlost=0.000000;stdevrxlost=0.000000;reported_minlost=0.000000;reported_maxlost=0.000000;reported_avglost=0.000000;reported_stdevlost=0.000000;


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7819
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSRTT
Value: minrtt=0.019515;maxrtt=0.020202;avgrtt=0.019968;stdevrtt=0.000817;


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7820
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSRTTBRIDGED
Value: minrtt=0.019515;maxrtt=0.020202;avgrtt=0.019968;stdevrtt=0.000817;


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7821
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: RTPAUDIOQOS
Value: ssrc=1970468080;themssrc=4259498139;lp=0;rxjitter=0.000000;rxcount=111;txjitter=0.018321;txcount=147;rlp=0;rtt=0.000000


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7822
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSBRIDGED
Value: ssrc=1970468080;themssrc=4259498139;lp=0;rxjitter=0.000000;rxcount=111;txjitter=0.018321;txcount=147;rlp=0;rtt=0.000000


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7823
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSJITTER
Value: minrxjitter=0.001249;maxrxjitter=0.021497;avgrxjitter=0.015266;stdevrxjitter=150480584303959649428503952818110102321564950107456806208579643070307161738191724085248.000000;reported_minjitter=152.000000;reported_maxjitter=152.000000;reported_avgjitter=152.


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7824
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSJITTERBRIDGED
Value: minrxjitter=0.001249;maxrxjitter=0.021497;avgrxjitter=0.015266;stdevrxjitter=150480584303959649428503952818110102321564950107456806208579643070307161738191724085248.000000;reported_minjitter=152.000000;reported_maxjitter=152.000000;reported_avgjitter=152.


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7825
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSLOSS
Value: minrxlost=0.000000;maxrxlost=0.000000;avgrxlost=0.000000;stdevrxlost=0.000000;reported_minlost=0.000000;reported_maxlost=0.000000;reported_avglost=0.000000;reported_stdevlost=0.000000;


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7826
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSLOSSBRIDGED
Value: minrxlost=0.000000;maxrxlost=0.000000;avgrxlost=0.000000;stdevrxlost=0.000000;reported_minlost=0.000000;reported_maxlost=0.000000;reported_avglost=0.000000;reported_stdevlost=0.000000;


    -- Channel SIP/toOurAster-000000bb left 'simple_bridge' basic-bridge <93a2c2ce-358b-422d-af07-3eb041e5b174>
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7827
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSRTT
Value: minrtt=0.000000;maxrtt=0.000000;avgrtt=0.000000;stdevrtt=0.000000;


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7828
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSRTTBRIDGED
Value: minrtt=0.000000;maxrtt=0.000000;avgrtt=0.000000;stdevrtt=0.000000;


<-- Examining AMI event: -->
Event: HangupRequest
Privilege: call,all
SequenceNumber: 7829
File: manager_channels.c
Line: 794
Func: channel_hangup_request_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7830
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: BRIDGEPEER
Value: 


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7831
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: BRIDGEPVTCALLID
Value: 


<-- Examining AMI event: -->
Event: AgentComplete
Privilege: agent,all
SequenceNumber: 7832
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
DestChannel: SIP/777-000000bc
DestChannelState: 6
DestChannelStateDesc: Up
DestCallerIDNum: 777
DestCallerIDName: Romanenko_E.
DestConnectedLineNum: 123
DestConnectedLineName: Eugene R
DestLanguage: ru
DestAccountCode: 
DestContext: dial_out
DestExten: sw_328_1
DestPriority: 1
DestUniqueid: 1514295839.373
DestLinkedid: 1514295827.372
Queue: Q1
Interface: SIP/777
MemberName: SIP/777
HoldTime: 9
TalkTime: 3
Reason: caller


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7833
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: BRIDGEPEER
Value: 


    -- Executing [h@eeivr:1] Set("SIP/toOurAster-000000bb", "CallMeDURATION=24") in new stack
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7834
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: BRIDGEPVTCALLID
Value: 


<-- Examining AMI event: -->
Event: BridgeLeave
Privilege: call,all
SequenceNumber: 7835
File: manager_bridges.c
Line: 448
Func: channel_leave_cb
BridgeUniqueid: 93a2c2ce-358b-422d-af07-3eb041e5b174
BridgeType: basic
BridgeTechnology: simple_bridge
BridgeCreator: <unknown>
BridgeName: <unknown>
BridgeNumChannels: 1
BridgeVideoSourceMode: none
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372


    -- Executing [h@eeivr:2] Set("SIP/toOurAster-000000bb", "CallMeDISPOSITION=ANSWERED") in new stack
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7836
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: QUEUESTATUS
Value: CONTINUE


<-- Examining AMI event: -->
Event: SoftHangupRequest
Privilege: call,all
SequenceNumber: 7837
File: manager_channels.c
Line: 794
Func: channel_hangup_request_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 11
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Cause: 16


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7838
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: h
Application: Set
AppData: CallMeDURATION=24


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7839
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 1
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: CallMeDURATION
Value: 24


    -- Executing [h@eeivr:3] NoOp("SIP/toOurAster-000000bb", "=== DURATION_in_eeivr = 24 ===") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7840
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 2
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: h
Application: Set
AppData: CallMeDISPOSITION=ANSWERED


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7841
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 2
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Variable: CallMeDISPOSITION
Value: ANSWERED


    -- Executing [h@eeivr:4] NoOp("SIP/toOurAster-000000bb", "=== BILLSEC_in_eeivr = 24 ===") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7842
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 3
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === DURATION_in_eeivr = 24 ===


    -- Executing [h@eeivr:5] NoOp("SIP/toOurAster-000000bb", "=== DISPOSITION_in_eeivr = ANSWERED ===") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7843
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 4
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === BILLSEC_in_eeivr = 24 ===


    -- Channel SIP/777-000000bc left 'simple_bridge' basic-bridge <93a2c2ce-358b-422d-af07-3eb041e5b174>
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7844
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 5
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === DISPOSITION_in_eeivr = ANSWERED ===


    -- Executing [h@eeivr:6] NoOp("SIP/toOurAster-000000bb", "=== CallMeDD =  ===") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7845
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 6
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === CallMeDD =  ===


    -- Executing [h@eeivr:7] NoOp("SIP/toOurAster-000000bb", "=== CallMeDISPOSITION = ANSWERED ===") in new stack
    -- Executing [h@eeivr:8] NoOp("SIP/toOurAster-000000bb", "=== CallMeDURATION = 24 ===") in new stack
    -- Executing [sw_328_1@eeivr:12] DumpChan("SIP/777-000000bc", "") in new stack
<-- Examining AMI event: -->
Event: BridgeLeave
Privilege: call,all
SequenceNumber: 7846
File: manager_bridges.c
Line: 448
Func: channel_leave_cb
BridgeUniqueid: 93a2c2ce-358b-422d-af07-3eb041e5b174
BridgeType: basic
BridgeTechnology: simple_bridge
BridgeCreator: <unknown>
BridgeName: <unknown>
BridgeNumChannels: 0
BridgeVideoSourceMode: none
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: dial_out
Exten: sw_328_1
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372


    -- Executing [h@eeivr:9] NoOp("SIP/toOurAster-000000bb", "=== AGENT =  ===") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7847
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 7
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === CallMeDISPOSITION = ANSWERED ===


<-- Examining AMI event: -->
Event: BridgeDestroy
Privilege: call,all
SequenceNumber: 7848
File: manager_bridges.c
Line: 367
Func: bridge_snapshot_update
BridgeUniqueid: 93a2c2ce-358b-422d-af07-3eb041e5b174
BridgeType: basic
BridgeTechnology: simple_bridge
BridgeCreator: <unknown>
BridgeName: <unknown>
BridgeNumChannels: 0
BridgeVideoSourceMode: none


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7849
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 8
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === CallMeDURATION = 24 ===



Dumping Info For Channel: SIP/777-000000bc:
================================================================================
Info:
Name=               SIP/777-000000bc
Type=               SIP
UniqueID=           1514295839.373
LinkedID=           1514295827.372
CallerIDNum=        777
CallerIDName=       Romanenko_E.
ConnectedLineIDNum= 123
ConnectedLineIDName=Eugene R
DNIDDigits=         (N/A)
RDNIS=              (N/A)
Parkinglot=         default
Language=           ru
State=              Up (6)
Rings=              0
NativeFormat=       (alaw)
WriteFormat=        alaw
ReadFormat=         alaw
RawWriteFormat=     alaw
RawReadFormat=      alaw
WriteTranscode=     No 
ReadTranscode=      No 
1stFileDescriptor=  39
Framesin=           129 
Framesout=          147 
TimetoHangup=       0
ElapsedTime=        0h0m12s
BridgeID=           (Not bridged)
Context=            eeivr
Extension=          sw_328_1
Priority=           12
CallGroup=          1
PickupGroup=        1
Application=        DumpChan
Data=               (Empty)
Blocking_in=        (Not Blocking)

Variables:
RTPAUDIOQOSRTT=minrtt=0.000000;maxrtt=0.000000;avgrtt=0.000000;stdevrtt=0.000000;
RTPAUDIOQOSLOSS=minrxlost=0.000000;maxrxlost=0.000000;avgrxlost=0.000000;stdevrxlost=0.000000;reported_minlost=0.000000;reported_maxlost=0.000000;reported_avglost=0.000000;reported_stdevlost=0.000000;
RTPAUDIOQOSJITTER=minrxjitter=0.001249;maxrxjitter=0.021497;avgrxjitter=0.015266;stdevrxjitter=150480584303959649428503952818110102321564950107456806208579643070307161738191724085248.000000;reported_minjitter=152.000000;reported_maxjitter=152.000000;reported_avgjitter=152.
RTPAUDIOQOS=ssrc=1970468080;themssrc=4259498139;lp=0;rxjitter=0.000000;rxcount=111;txjitter=0.018321;txcount=147;rlp=0;rtt=0.000000
RTPAUDIOQOSRTTBRIDGED=minrtt=0.019515;maxrtt=0.020202;avgrtt=0.019968;stdevrtt=0.000817;
RTPAUDIOQOSLOSSBRIDGED=minrxlost=0.000000;maxrxlost=0.000000;avgrxlost=0.000000;stdevrxlost=0.000000;reported_minlost=0.000000;reported_maxlost=0.000000;reported_avglost=0.000000;reported_stdevlost=0.000000;
RTPAUDIOQOSJITTERBRIDGED=minrxjitter=0.000701;maxrxjitter=0.011988;avgrxjitter=0.006176;stdevrxjitter=inf;reported_minjitter=2.000000;reported_maxjitter=15.000000;reported_avgjitter=5.750000;reported_stdevjitter=18.131895;
RTPAUDIOQOSBRIDGED=ssrc=737561271;themssrc=737890746;lp=0;rxjitter=0.000000;rxcount=1193;txjitter=0.006167;txcount=900;rlp=0;rtt=0.020187
QEORIGINALPOS=1
QEHOLDTIME=9
MEMBERREALTIME=0
MEMBERDYNAMIC=0
MEMBERPENALTY=1
MEMBERLASTCALL=1514295565
MEMBERCALLS=62
MEMBERNAME=SIP/777
MEMBERINTERFACE=SIP/777
SIPCALLID=2ba2c0845dd3dfc91291119725e29640@10.100.111.249:5060
================================================================================
    -- Executing [sw_328_1@eeivr:13] NoOp("SIP/777-000000bc", "=== MEMBERINTERFACE = SIP/777 ===") in new stack
    -- Executing [sw_328_1@eeivr:14] Set("SIP/777-000000bc", "__AGENT=777") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7850
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 12
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: sw_328_1
Application: DumpChan
AppData: 


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7851
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 9
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === AGENT =  ===


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7852
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 13
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: sw_328_1
Application: NoOp
AppData: === MEMBERINTERFACE = SIP/777 ===


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7853
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 14
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: sw_328_1
Application: Set
AppData: __AGENT=777


    -- Executing [sw_328_1@eeivr:15] Hangup("SIP/777-000000bc", "") in new stack
<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7854
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 14
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: __AGENT
Value: 777


  == Spawn extension (eeivr, sw_328_1, 15) exited non-zero on 'SIP/777-000000bc'
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7855
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 15
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: sw_328_1
Application: Hangup
AppData: 


<-- Examining AMI event: -->
Event: Hangup
Privilege: call,all
SequenceNumber: 7856
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/toOurAster-000000bb
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 123
CallerIDName: Eugene R
ConnectedLineNum: 777
ConnectedLineName: Romanenko_E.
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 10
Uniqueid: 1514295827.372
Linkedid: 1514295827.372
Cause: 16
Cause-txt: Normal Clearing


<-- Examining AMI event: -->
Event: SoftHangupRequest
Privilege: call,all
SequenceNumber: 7857
File: manager_channels.c
Line: 794
Func: channel_hangup_request_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: sw_328_1
Priority: 15
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Cause: 16


  == MixMonitor close filestream (mixed)
  == Executing [nice -n 19 /usr/bin/lame -b 32  --silent "/var/www/pbx-aseeva.vistep.ru/callme/records/wav/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.wav"  "/var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3" && rm -f "/var/www/pbx-aseeva.vistep.ru/callme/records/wav/1514295827.372-2017-12-26-14_43-123-888999.wav" && chmod o+r "/var/www/pbx-aseeva.vistep.ru/callme/records/mp3/2017/12/26/1514295827.372-2017-12-26-14_43-123-888999.mp3"]
    -- Executing [h@eeivr:1] Set("SIP/777-000000bc", "CallMeDURATION=0") in new stack
    -- Executing [h@eeivr:2] Set("SIP/777-000000bc", "CallMeDISPOSITION=ANSWERED") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7858
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: h
Application: Set
AppData: CallMeDURATION=0


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7859
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 1
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: CallMeDURATION
Value: 0


    -- Executing [h@eeivr:3] NoOp("SIP/777-000000bc", "=== DURATION_in_eeivr = 0 ===") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7860
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 2
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: h
Application: Set
AppData: CallMeDISPOSITION=ANSWERED


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7861
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 2
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: CallMeDISPOSITION
Value: ANSWERED


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7862
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 3
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === DURATION_in_eeivr = 0 ===


  == End MixMonitor Recording SIP/toOurAster-000000bb
    -- Executing [h@eeivr:4] NoOp("SIP/777-000000bc", "=== BILLSEC_in_eeivr = 0 ===") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7863
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 4
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === BILLSEC_in_eeivr = 0 ===


    -- Executing [h@eeivr:5] NoOp("SIP/777-000000bc", "=== DISPOSITION_in_eeivr = ANSWERED ===") in new stack
    -- Executing [h@eeivr:6] NoOp("SIP/777-000000bc", "=== CallMeDD =  ===") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7864
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 5
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === DISPOSITION_in_eeivr = ANSWERED ===


    -- Executing [h@eeivr:7] NoOp("SIP/777-000000bc", "=== CallMeDISPOSITION = ANSWERED ===") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7865
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 6
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === CallMeDD =  ===


    -- Executing [h@eeivr:8] NoOp("SIP/777-000000bc", "=== CallMeDURATION = 0 ===") in new stack
    -- Executing [h@eeivr:9] NoOp("SIP/777-000000bc", "=== AGENT = 777 ===") in new stack
<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7866
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 7
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === CallMeDISPOSITION = ANSWERED ===


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7867
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 8
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === CallMeDURATION = 0 ===


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7868
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 9
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: h
Application: NoOp
AppData: === AGENT = 777 ===


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7869
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 9
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: RTPAUDIOQOS
Value: ssrc=1070359454;themssrc=4259498139;lp=0;rxjitter=0.000000;rxcount=111;txjitter=0.018321;txcount=147;rlp=0;rtt=0.000000


<-- Examining AMI event: -->
Event: DeviceStateChange
Privilege: call,all
SequenceNumber: 7870
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Device: SIP/777
State: NOT_INUSE


<-- Examining AMI event: -->
Event: ExtensionStatus
Privilege: call,all
SequenceNumber: 7871
File: manager.c
Line: 7027
Func: manager_state_cb
Exten: 777
Context: default
Hint: SIP/777
Status: 0
StatusText: Idle


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7872
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 9
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSJITTER
Value: minrxjitter=0.001249;maxrxjitter=0.021497;avgrxjitter=0.015266;stdevrxjitter=150480584303959649428503952818110102321564950107456806208579643070307161738191724085248.000000;reported_minjitter=152.000000;reported_maxjitter=152.000000;reported_avgjitter=152.


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7873
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 9
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSLOSS
Value: minrxlost=0.000000;maxrxlost=0.000000;avgrxlost=0.000000;stdevrxlost=0.000000;reported_minlost=0.000000;reported_maxlost=0.000000;reported_avglost=0.000000;reported_stdevlost=0.000000;


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7874
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 9
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: RTPAUDIOQOSRTT
Value: minrtt=0.000000;maxrtt=0.000000;avgrtt=0.000000;stdevrtt=0.000000;


<-- Examining AMI event: -->
Event: Newexten
Privilege: call,all
SequenceNumber: 7875
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 10
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Extension: h
Application: AppQueue
AppData: (Outgoing Line)


<-- Examining AMI event: -->
Event: VarSet
Privilege: dialplan,all
SequenceNumber: 7876
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 10
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Variable: RTPAUDIOQOS
Value: ssrc=1070359454;themssrc=4259498139;lp=0;rxjitter=0.000000;rxcount=111;txjitter=0.018321;txcount=147;rlp=0;rtt=0.000000


<-- Examining AMI event: -->
Event: QueueMemberStatus
Privilege: agent,all
SequenceNumber: 7877
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Queue: Q1
MemberName: SIP/777
Interface: SIP/777
StateInterface: SIP/777
Membership: static
Penalty: 1
CallsTaken: 63
LastCall: 1514295851
InCall: 0
Status: 1
Paused: 0
PausedReason: 
Ringinuse: 0


<-- Examining AMI event: -->
Event: DeviceStateChange
Privilege: call,all
SequenceNumber: 7878
File: manager.c
Line: 1836
Func: manager_default_msg_cb
Device: Queue:Q1_avail
State: NOT_INUSE


<-- Examining AMI event: -->
Event: Hangup
Privilege: call,all
SequenceNumber: 7879
File: manager_channels.c
Line: 734
Func: channel_snapshot_update
Channel: SIP/777-000000bc
ChannelState: 6
ChannelStateDesc: Up
CallerIDNum: 777
CallerIDName: Romanenko_E.
ConnectedLineNum: 123
ConnectedLineName: Eugene R
Language: ru
AccountCode: 
Context: eeivr
Exten: h
Priority: 10
Uniqueid: 1514295839.373
Linkedid: 1514295827.372
Cause: 16
Cause-txt: Normal Clearing


pbx-aseeva*CLI> 
Disconnected from Asterisk server
Asterisk cleanly ending (0).
Executing last minute cleanups
┌14:44:15-root@pbx-aseeva.vistep.ru:(/etc/asterisk)

