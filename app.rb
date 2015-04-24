require 'sinatra'
require 'redis'
require 'json'

configure do
  set :port, 5678
end

get '/' do
  erb :index
end

get '/ihou' do
  @redis = Redis.new
  @redis.incr "ihou"

  ihoucount = @redis.get("ihou")

  return ihoucount
end

get '/iken' do
  @redis = Redis.new
  @redis.incr "iken"

  ihoucount = @redis.get("iken")

  return ihoucount
end

get '/itf' do
  @redis = Redis.new
  @redis.incr "itf"

  ihoucount = @redis.get("itf")

  return ihoucount
end

get '/watc' do
  @redis = Redis.new
  @redis.incr "watc"

  ihoucount = @redis.get("watc")

  return ihoucount
end

get '/emo' do
  @redis = Redis.new
  @redis.incr "emo"

  ihoucount = @redis.get("emo")

  return ihoucount
end

get '/values' do
  return values
end

get '/reset' do
  @redis = Redis.new

  @redis.set "ihou", 0
  @redis.set "iken", 0
  @redis.set "emo", 0
  @redis.set "itf", 0
  @redis.set "watc", 0
end

def values
  @redis = Redis.new
  ihou = @redis.get "ihou"
  iken = @redis.get "iken"
  emo  = @redis.get "emo"
  itf  = @redis.get "itf"
  watc = @redis.get "watc"

  return JSON.generate({:ihou => ihou, :iken => iken, :emo => emo, :itf => itf, :watc => watc})
end
