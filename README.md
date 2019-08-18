# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation　

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

##　groups_usersテーブル
|column|type|options|
|------|----|-------|
|user_id|integer|null: false ,foreign_key: true|
|group_id|integer|null: false ,foreign_key: true|

##　Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|column|type|options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|
|group_id|integer|null: false, foreign_key :true|
|message_id|integer|null: false, foreign_key :true|


## Association
- has_many :groups ,through: :groups_users
- has_many :massages

## groupsテーブル
|column|type|options|
|------|----|-------|
|user_id|integer|null: false, foreigner_key: true|
|message_id|integer|null: false, foreign_key :true|

## Association
- has_many :users ,through: :groups_users
- has_many :massages

## messagesテーブル
|column|type|options|
|------|----|-------|
|id|integer|null: false|
|body|text|null: false|
|image|string|  |
|group_id|integer|null: false, foreigner_key: true|
|user_id|integer|null: false, foreigner_key: true|

## Association
- belongs_to :group
- belongs_to :user